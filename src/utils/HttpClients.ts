import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { delay } from "./util"



export class HttpClient {
  protected client: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.client = axios.create(config)
  }

  public get instance(): AxiosInstance {
    return this.client
  }
}


const MAX_RETRY = 2
interface AdminClientConfig {
  mallId: string,
  getAccessToken: () => Promise<string>,
}
export class AdminClient extends HttpClient {
  constructor(cafe24Config: AdminClientConfig) {
    super({
      baseURL: `https://${cafe24Config.mallId}.cafe24api.com/api/v2/admin`,
      headers: {
        "Content-Type": "application/json",
        "X-Cafe24-Api-Version": "2024-06-01",
      },
    })
    this.setupInterceptors()
    this.getAccessToken = cafe24Config.getAccessToken
  }
  
  private setupInterceptors() {
    this.client.interceptors.response.use(
      (response) => response,
      (error) => this.handleError(error)
    )
  }

  private async handleError(error: AxiosError): Promise<any> {
    const { config, response } = error

    if (!config || !response || !response.data) {
      return Promise.reject(error)
    }

    const errorResponse = response.data as { error: { code: string, message: string }}

    const originalRequest = config as AxiosRequestConfig & { _retryCount?: number }
    originalRequest._retryCount = originalRequest._retryCount || 0

    if (originalRequest._retryCount >= MAX_RETRY) {
      return Promise.reject(new Error(errorResponse.error.message))
    }

    originalRequest._retryCount += 1

    if (response.status === 429) { // 요청 속도가 너무 빠름
      await delay(500)
      return this.client(originalRequest)
    } 
    else if (response.status === 401) { // 엑세스 토큰이 잘못됨
      try {
        const newAccessToken = await this.getAccessToken()
        originalRequest.headers!["Authorization"] = `Bearer ${newAccessToken}`
        return this.client(originalRequest) 
      } catch (tokenError) {
        return Promise.reject(error)
      }
    }

    return Promise.reject(new Error(errorResponse.error.message))
  }

  private getAccessToken: () => Promise<string> = async () => {
    throw new Error('getAccessToken 함수가 설정되지 않았습니다.')
  }
}


interface OAuthClientConfig {
  mallId: string,
  clientId: string,
  clientSecret: string,
}
export class OAuthClient extends HttpClient {
  constructor(cafe24Config: OAuthClientConfig) {
    super({
      baseURL: `https://${cafe24Config.mallId}.cafe24api.com/api/v2/oauth`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${btoa(cafe24Config.clientId + ":" + cafe24Config.clientSecret)}`
      }
    })
  }
}