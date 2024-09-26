"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const query_1 = require("../utils/query");
const _1 = require(".");
class ProductService extends _1.AbstractService {
    constructor(client) {
        super(client);
    }
    async getOne(productNo, options) {
        const queryMap = new Map(Object.entries(options));
        const url = `/products/${productNo}` + (0, query_1.queryMapToString)(queryMap);
        const res = await this.client.get(url);
        return res.data.product;
    }
    async getList(options) {
        const queryMap = new Map(Object.entries(options));
        const url = `/products` + (0, query_1.queryMapToString)(queryMap);
        const res = await this.client.get(url);
        return res.data.products;
    }
}
exports.ProductService = ProductService;
