import { OAuthService } from "./services/OAuth";
import { ProductService } from "./services/Products";
interface Cafe24APIOptions {
    mallId: string;
    getAccessToken: () => Promise<string>;
    clientId: string;
    clientSecret: string;
}
export declare class Cafe24API {
    private adminClient;
    private oAuthClient;
    Products: ProductService;
    OAuth: OAuthService;
    constructor(options: Cafe24APIOptions);
}
export {};
