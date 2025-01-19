"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cafe24API = void 0;
const OAuth_1 = require("./services/OAuth");
const Orders_1 = require("./services/Order/Orders");
const OrdersCancellation_1 = require("./services/Order/OrdersCancellation");
const OrdersItems_1 = require("./services/Order/OrdersItems");
const Products_1 = require("./services/Product/Products");
const HttpClients_1 = require("./utils/HttpClients");
class Cafe24API {
    constructor(options) {
        this.adminClient = new HttpClients_1.AdminClient({
            mallId: options.mallId,
            getAccessToken: options.getAccessToken,
            apiVersion: options.apiVersion,
        });
        this.oAuthClient = new HttpClients_1.OAuthClient({
            mallId: options.mallId,
            clientId: options.clientId,
            clientSecret: options.clientSecret,
        });
        const adminClientInstance = this.adminClient.instance;
        this.products = new Products_1.ProductsService(adminClientInstance);
        this.orders = new Orders_1.OrdersService(adminClientInstance);
        this.ordersCancellation = new OrdersCancellation_1.OrdersCancellationService(adminClientInstance);
        this.ordersItems = new OrdersItems_1.OrdersItemsService(adminClientInstance);
        this.oAuth = new OAuth_1.OAuthService(this.oAuthClient.instance);
    }
}
exports.Cafe24API = Cafe24API;
