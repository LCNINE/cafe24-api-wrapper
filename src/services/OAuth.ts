import { AxiosInstance } from "axios";
import { AbstractService } from ".";

export class OAuthService extends AbstractService {
  constructor(client: AxiosInstance) {
    super(client);
  }

  private static tokenData: {
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
  } | null = null;

  // 토큰 데이터 설정
  public static setTokenData(
    accessToken: string,
    refreshToken: string,
    expiresAt: number
  ) {
    this.tokenData = { accessToken, refreshToken, expiresAt };
  }

  // 토큰 갱신 로직
  private async refreshToken() {
    if (!OAuthService.tokenData?.refreshToken) {
      throw new Error("Refresh token is missing.");
    }

    const res = await this.client.post<Cafe24AccessToken>("/token", {
      grant_type: "refresh_token",
      refresh_token: OAuthService.tokenData.refreshToken,
    });

    const newTokenData = res.data;
    OAuthService.setTokenData(
      newTokenData.access_token,
      newTokenData.refresh_token,
      new Date(newTokenData.expires_at).getTime()
    );
    return newTokenData.access_token;
  }

  // 토큰 자동 갱신 포함한 API 호출
  public async requestWithAuth(config: any) {
    if (
      !OAuthService.tokenData ||
      new Date().getTime() >= OAuthService.tokenData.expiresAt
    ) {
      await this.refreshToken();
    }

    return this.client.request({
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${OAuthService.tokenData?.accessToken}`,
      },
    });
  }
}

type Cafe24AccessToken = {
  access_token: string;
  expires_at: string;
  refresh_token: string;
  refresh_token_expires_at: string;
  client_id: string;
  mall_id: string;
  user_id: string;
  scopes: string[];
  issued_at: string;
};
