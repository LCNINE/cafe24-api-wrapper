"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cafe24API = void 0;
const OAuth_1 = require("./services/OAuth");
const Products_1 = require("./services/Products");
const HttpClients_1 = require("./utils/HttpClients");
class Cafe24API {
    constructor(options) {
        this.adminClient = new HttpClients_1.AdminClient({
            mallId: options.mallId,
            getAccessToken: options.getAccessToken,
        });
        this.oAuthClient = new HttpClients_1.OAuthClient({
            mallId: options.mallId,
            clientId: options.clientId,
            clientSecret: options.clientSecret,
        });
        const adminClientInstance = this.adminClient.instance;
        this.Products = new Products_1.ProductService(adminClientInstance);
        this.OAuth = new OAuth_1.OAuthService(this.oAuthClient.instance);
    }
}
exports.Cafe24API = Cafe24API;
