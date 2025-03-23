import { PointsService } from "./services/Mileage/Points";
import { OAuthService } from "./services/OAuth";
import { OrdersService } from "./services/Order/Orders";
import { OrdersCancellationService } from "./services/Order/OrdersCancellation";
import { OrdersItemsService } from "./services/Order/OrdersItems";
import { ProductsService } from "./services/Product/Products/Products";
import { ProductsAdditionalimagesService } from "./services/Product/ProductsAdditionalimages";
import { ProductsImagesService } from "./services/Product/productsImages/Service";
import { ProductsOptionsService } from "./services/Product/ProductsOptions/Service";
import { ProductsVariantsService } from "./services/Product/ProductsVariants";
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
    productsOptions: ProductsOptionsService;
    productsVariants: ProductsVariantsService;
    productsImages: ProductsImagesService;
    productsAdditionalimages: ProductsAdditionalimagesService;
    orders: OrdersService;
    ordersCancellation: OrdersCancellationService;
    ordersItems: OrdersItemsService;
    points: PointsService;
    oAuth: OAuthService;
    constructor(options: Cafe24APIOptions);
}
export {};
