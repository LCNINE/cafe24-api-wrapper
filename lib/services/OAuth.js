"use strict";

const AbstractService = require("./");

class OAuthService extends AbstractService {
  constructor(client) {
    super(client);
    this.tokenData = null; // 토큰 데이터를 저장
  }

  /**
   * 토큰 데이터 설정
   * @param {string} accessToken - 액세스 토큰
   * @param {string} refreshToken - 리프레시 토큰
   * @param {number} expiresAt - 액세스 토큰 만료 시간 (timestamp)
   */
  setTokenData(accessToken, refreshToken, expiresAt) {
    this.tokenData = { accessToken, refreshToken, expiresAt };
  }

  /**
   * 토큰 갱신 로직
   * @returns {Promise<string>} 새로운 액세스 토큰
   * @throws {Error} 리프레시 토큰이 없거나 요청 실패 시
   */
  async refreshToken() {
    if (!this.tokenData || !this.tokenData.refreshToken) {
      throw new Error("Refresh token is missing.");
    }

    try {
      const res = await this.client.post("/token", {
        grant_type: "refresh_token",
        refresh_token: this.tokenData.refreshToken,
      });

      const newTokenData = res.data;
      this.setTokenData(
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

  /**
   * 토큰 자동 갱신 포함한 API 호출
   * @param {Object} config - Axios 요청 설정 객체
   * @returns {Promise<any>} Axios 응답 데이터
   * @throws {Error} 요청 실패 시
   */
  async requestWithAuth(config) {
    const bufferTime = 300000; // 토큰 만료 5분 전에 갱신
    const currentTime = Date.now();

    // 토큰 만료 검사 및 갱신
    if (
      !this.tokenData ||
      currentTime >= this.tokenData.expiresAt - bufferTime
    ) {
      await this.refreshToken();
    }

    // 요청에 인증 헤더 추가
    return this.client.request({
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${this.tokenData.accessToken}`,
      },
    });
  }
}

module.exports = OAuthService;
