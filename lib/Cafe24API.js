"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cafe24API = void 0;
const Customers_1 = require("./services/Customer/Customers/Customers");
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
    }
    // adminClientInstance에 대한 게터
    get adminClientInstance() {
        if (!this._adminClientInstance) {
            this._adminClientInstance = this.adminClient.instance;
        }
        return this._adminClientInstance;
    }
    // 각 서비스에 대한 게터 메서드
    get products() {
        if (!this._products) {
            this._products = new Products_1.ProductsService(this.adminClientInstance);
        }
        return this._products;
    }
    get productsOptions() {
        if (!this._productsOptions) {
            this._productsOptions = new Service_2.ProductsOptionsService(this.adminClientInstance);
        }
        return this._productsOptions;
    }
    get productsVariants() {
        if (!this._productsVariants) {
            this._productsVariants = new ProductsVariants_1.ProductsVariantsService(this.adminClientInstance);
        }
        return this._productsVariants;
    }
    get productsImages() {
        if (!this._productsImages) {
            this._productsImages = new Service_1.ProductsImagesService(this.adminClientInstance);
        }
        return this._productsImages;
    }
    get productsAdditionalimages() {
        if (!this._productsAdditionalimages) {
            this._productsAdditionalimages = new ProductsAdditionalimages_1.ProductsAdditionalimagesService(this.adminClientInstance);
        }
        return this._productsAdditionalimages;
    }
    get orders() {
        if (!this._orders) {
            this._orders = new Orders_1.OrdersService(this.adminClientInstance);
        }
        return this._orders;
    }
    get ordersCancellation() {
        if (!this._ordersCancellation) {
            this._ordersCancellation = new OrdersCancellation_1.OrdersCancellationService(this.adminClientInstance);
        }
        return this._ordersCancellation;
    }
    get ordersItems() {
        if (!this._ordersItems) {
            this._ordersItems = new OrdersItems_1.OrdersItemsService(this.adminClientInstance);
        }
        return this._ordersItems;
    }
    get customers() {
        if (!this._customers) {
            this._customers = new Customers_1.CustomersService(this.adminClientInstance);
        }
        return this._customers;
    }
    get points() {
        if (!this._points) {
            this._points = new Points_1.PointsService(this.adminClientInstance);
        }
        return this._points;
    }
    get oAuth() {
        if (!this._oAuth) {
            this._oAuth = new OAuth_1.OAuthService(this.oAuthClient.instance);
        }
        return this._oAuth;
    }
}
exports.Cafe24API = Cafe24API;
