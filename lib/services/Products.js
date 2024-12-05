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
    /**
     * 상품 재고 조회
     */
    async getInventory(productNo) {
        const url = `/products/${productNo}/inventories`;
        const res = await this.client.get(url);
        return res.data.inventories;
    }
    /**
     * 상품 옵션 조회
     */
    async getOptions(productNo) {
        const url = `/products/${productNo}/options`;
        const res = await this.client.get(url);
        return res.data.options;
    }
    /**
     * 상품 품절 여부 조회
     */
    async getSoldoutStatus(productNo) {
        const url = `/products/${productNo}/soldout`;
        const res = await this.client.get(url);
        return res.data.soldout;
    }
}
exports.ProductService = ProductService;
