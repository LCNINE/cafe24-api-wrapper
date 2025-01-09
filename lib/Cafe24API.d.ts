import { OAuthService } from "./services/OAuth";
import { ProductsService } from "./services/Product/Products";
interface Cafe24APIOptions {
    mallId: string;
    getAccessToken: () => Promise<string>;
    clientId: string;
    clientSecret: string;
}
export declare class Cafe24API {
    private adminClient;
    private oAuthClient;
    products: ProductsService;
    oAuth: OAuthService;
    constructor(options: Cafe24APIOptions);
}
export {};
