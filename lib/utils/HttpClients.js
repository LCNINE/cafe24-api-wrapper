"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthClient = exports.AdminClient = exports.HttpClient = void 0;
const axios_1 = __importDefault(require("axios"));
const util_1 = require("./util");
class HttpClient {
    constructor(config) {
        this.client = axios_1.default.create(config);
    }
    get instance() {
        return this.client;
    }
}
exports.HttpClient = HttpClient;
const MAX_RETRY = 2;
class AdminClient extends HttpClient {
    constructor(cafe24Config) {
        super({
            baseURL: `https://${cafe24Config.mallId}.cafe24api.com/api/v2/admin`,
            headers: {
                "Content-Type": "application/json",
                "X-Cafe24-Api-Version": "2024-06-01",
            },
        });
        this.getAccessToken = async () => {
            throw new Error('getAccessToken 함수가 설정되지 않았습니다.');
        };
        this.setupInterceptors();
        this.getAccessToken = cafe24Config.getAccessToken;
    }
    setupInterceptors() {
        this.client.interceptors.response.use((response) => response, (error) => this.handleError(error));
    }
    async handleError(error) {
        const { config, response } = error;
        if (!config || !response || !response.data) {
            return Promise.reject(error);
        }
        const errorResponse = response.data;
        const originalRequest = config;
        originalRequest._retryCount = originalRequest._retryCount || 0;
        if (originalRequest._retryCount >= MAX_RETRY) {
            return Promise.reject(new Error(errorResponse.error.message));
        }
        originalRequest._retryCount += 1;
        if (response.status === 429) { // 요청 속도가 너무 빠름
            await (0, util_1.delay)(500);
            return this.client(originalRequest);
        }
        else if (response.status === 401) { // 엑세스 토큰이 잘못됨
            try {
                const newAccessToken = await this.getAccessToken();
                originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return this.client(originalRequest);
            }
            catch (tokenError) {
                return Promise.reject(error);
            }
        }
        return Promise.reject(new Error(errorResponse.error.message));
    }
}
exports.AdminClient = AdminClient;
class OAuthClient extends HttpClient {
    constructor(cafe24Config) {
        super({
            baseURL: `https://${cafe24Config.mallId}.cafe24api.com/api/v2/oauth`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Basic ${btoa(cafe24Config.clientId + ":" + cafe24Config.clientSecret)}`
            }
        });
    }
}
exports.OAuthClient = OAuthClient;
