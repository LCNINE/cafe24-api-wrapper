"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthService = void 0;
const _1 = require(".");
class OAuthService extends _1.AbstractService {
    constructor(client) {
        super(client);
    }
    async refreshToken(refreshToken) {
        const res = await this.client.post("/token", {
            grant_type: "refresh_token",
            refresh_token: refreshToken,
        });
        return res.data;
    }
}
exports.OAuthService = OAuthService;
