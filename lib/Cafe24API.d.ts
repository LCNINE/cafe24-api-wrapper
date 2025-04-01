import { CustomersService } from "./services/Customer/Customers/Customers";
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
    private _adminClientInstance;
    private _products?;
    private _productsOptions?;
    private _productsVariants?;
    private _productsImages?;
    private _productsAdditionalimages?;
    private _orders?;
    private _ordersCancellation?;
    private _ordersItems?;
    private _points?;
    private _customers?;
    private _oAuth?;
    constructor(options: Cafe24APIOptions);
    private get adminClientInstance();
    get products(): ProductsService;
    get productsOptions(): ProductsOptionsService;
    get productsVariants(): ProductsVariantsService;
    get productsImages(): ProductsImagesService;
    get productsAdditionalimages(): ProductsAdditionalimagesService;
    get orders(): OrdersService;
    get ordersCancellation(): OrdersCancellationService;
    get ordersItems(): OrdersItemsService;
    get customers(): CustomersService;
    get points(): PointsService;
    get oAuth(): OAuthService;
}
export {};
