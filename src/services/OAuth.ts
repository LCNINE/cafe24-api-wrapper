import { AxiosInstance, AxiosRequestConfig } from "axios";
import { AbstractService } from ".";

export class OAuthService extends AbstractService {
  private static tokenData: {
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
  } | null = null;

  private static tokenExpiryBuffer = 300000; // 5분 (밀리초)

  constructor(client: AxiosInstance) {
    super(client);
  }

  public static setTokenData(
    accessToken: string,
    refreshToken: string,
    expiresAt: number
  ) {
    this.tokenData = { accessToken, refreshToken, expiresAt };
  }

  private async refreshToken() {
    if (!OAuthService.tokenData?.refreshToken) {
      throw new Error("Refresh token is missing.");
    }

    try {
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

      console.log("Access token refreshed successfully.");
      return newTokenData.access_token;
    } catch (error) {
      console.error("Failed to refresh token:", error);
      throw new Error("Unable to refresh token. Please reauthenticate.");
    }
  }

  public async requestWithAuth(config: AxiosRequestConfig) {
    if (
      !OAuthService.tokenData ||
      new Date().getTime() >=
        OAuthService.tokenData.expiresAt - OAuthService.tokenExpiryBuffer
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
