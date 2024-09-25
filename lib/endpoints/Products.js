"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const query_1 = require("../utils/query");
class Products {
    constructor(client) {
        this.client = client;
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
exports.Products = Products;
function fetchProduct(embeds) {
    // 실제 구현에서는 embeds를 쿼리 스트링에 추가하여 API 요청을 수행합니다.
    // 여기서는 타입 안전성을 보여주기 위한 예시입니다.
    return fetch('/api/product?embed=' + embeds.join(','))
        .then(response => response.json())
        // 타입 단언을 사용하여 응답을 ApiResponse<E>로 변환
        .then(data => data);
}
