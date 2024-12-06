"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthService = void 0;
const _1 = require(".");

Object.defineProperty(exports, "__esModule", { value: true });

const fetch = require("node-fetch"); // Vercel API 호출을 위해 사용

class OAuthService extends _1.AbstractService {
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
   * Vercel 환경 변수 업데이트
   * @param {Object} envVars - 업데이트할 환경 변수
   */
  async updateVercelEnv(envVars) {
    const projectId = process.env.VERCEL_PROJECT_ID;
    const token = process.env.VERCEL_AUTH_TOKEN;

    if (!projectId || !token) {
      throw new Error("Missing Vercel project ID or API token.");
    }

    const envUpdates = Object.entries(envVars).map(([key, value]) => ({
      key,
      value,
      type: "encrypted", // 환경 변수는 암호화된 상태로 저장
      target: ["production", "preview", "development"],
    }));

    const response = await fetch(
      `https://api.vercel.com/v9/projects/${projectId}/env`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(envUpdates),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("Failed to update Vercel environment variables:", error);
      throw new Error("Failed to update environment variables.");
    }

    console.log("Environment variables updated successfully.");
  }

  /**
   * 토큰 갱신 로직
   * @returns {Promise<string>} 새로운 액세스 토큰
   * @throws {Error} 리프레시 토큰이 없거나 요청 실패 시
   */
  async refreshAccessToken(refreshToken) {
    console.log('refreshAccessToken.refreshToken:', refreshToken)
    if (!refreshToken) {
      throw new Error("Refresh token parameter is missing.");
    }

    console.log('refreshAccessToken.refreshToken1...')
    try {
      const data = new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }).toString();
      console.log('refreshAccessToken.data:', data)

      const authorization = Buffer.from(
        `${process.env.NEXT_PUBLIC_CAFE24_CLIENT_ID}:${process.env.CAFE24_CLIENT_SECRET}`
      ).toString("base64");
      console.log('refreshAccessToken.authorization:', authorization)

      console.log('refreshAccessToken.client:', this.client)
      
      const res = await this.client.post("/token", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": `Basic ${authorization}`,
        },
      });
      console.log('refreshAccessToken.res:', res)

      const newTokenData = res.data;
      console.log('refreshAccessToken.newTokenData:', newTokenData)

      // 로컬 토큰 데이터 업데이트
      this.setTokenData(
        newTokenData.access_token,
        newTokenData.refresh_token,
        new Date(newTokenData.expires_at).getTime()
      );

      console.log("Access token refreshed successfully.");
      console.log('refreshAccessToken.refreshToken2...')

      return newTokenData;
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

exports.OAuthService = OAuthService;
