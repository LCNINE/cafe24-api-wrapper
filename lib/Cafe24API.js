"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cafe24API = void 0;
const Points_1 = require("./services/Mileage/Points");
const OAuth_1 = require("./services/OAuth");
const Orders_1 = require("./services/Order/Orders");
const OrdersCancellation_1 = require("./services/Order/OrdersCancellation");
const OrdersItems_1 = require("./services/Order/OrdersItems");
const Products_1 = require("./services/Product/Products/Products");
const ProductsAdditionalimages_1 = require("./services/Product/ProductsAdditionalimages");
const Service_1 = require("./services/Product/productsImages/Service");
const Service_2 = require("./services/Product/ProductsOptions/Service");
const ProductsVariants_1 = require("./services/Product/ProductsVariants");
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
        this.productsOptions = new Service_2.ProductsOptionsService(adminClientInstance);
        this.productsVariants = new ProductsVariants_1.ProductsVariantsService(adminClientInstance);
        this.productsImages = new Service_1.ProductsImagesService(adminClientInstance);
        this.productsAdditionalimages = new ProductsAdditionalimages_1.ProductsAdditionalimagesService(adminClientInstance);
        this.orders = new Orders_1.OrdersService(adminClientInstance);
        this.ordersCancellation = new OrdersCancellation_1.OrdersCancellationService(adminClientInstance);
        this.ordersItems = new OrdersItems_1.OrdersItemsService(adminClientInstance);
        this.points = new Points_1.PointsService(adminClientInstance);
        this.oAuth = new OAuth_1.OAuthService(this.oAuthClient.instance);
    }
}
exports.Cafe24API = Cafe24API;
