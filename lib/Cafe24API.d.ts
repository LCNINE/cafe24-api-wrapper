import { OAuthService } from "./services/OAuth";
import { OrdersService } from "./services/Order/Orders";
import { OrdersCancellationService } from "./services/Order/OrdersCancellation";
import { OrdersItemsService } from "./services/Order/OrdersItems";
import { ProductsService } from "./services/Product/Products";
interface Cafe24APIOptions {
    mallId: string;
    getAccessToken: () => Promise<string>;
    clientId: string;
    clientSecret: string;
    apiVersion: string;
}
export declare class Cafe24API {
    private adminClient;
    private oAuthClient;
    products: ProductsService;
    orders: OrdersService;
    ordersCancellation: OrdersCancellationService;
    ordersItems: OrdersItemsService;
    oAuth: OAuthService;
    constructor(options: Cafe24APIOptions);
}
export {};
