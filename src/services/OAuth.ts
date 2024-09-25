import { AxiosInstance } from "axios";
import { AbstractService } from ".";

export class OAuthService extends AbstractService {
  constructor(client: AxiosInstance) {
    super(client)
  }

  public async refreshToken(refreshToken: string) {
    const res = await this.client.post<Cafe24AccessToken>("/token", {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    })
    return res.data
  }
}


type Cafe24AccessToken = {
  access_token: string,
  expires_at: string,
  refresh_token: string,
  refresh_token_expires_at: string,
  client_id: string,
  mall_id: string,
  user_id: string,
  scopes: string[],
  issued_at: string,
}