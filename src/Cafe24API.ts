import { CustomersService } from "./services/Customer/Customers/Customers"
import { PointsService } from "./services/Mileage/Points"
import { OAuthService } from "./services/OAuth"
import { OrdersService } from "./services/Order/Orders"
import { OrdersCancellationService } from "./services/Order/OrdersCancellation"
import { OrdersItemsService } from "./services/Order/OrdersItems"
import { ProductsService } from "./services/Product/Products/Products"
import { ProductsAdditionalimagesService } from "./services/Product/ProductsAdditionalimages"
import { ProductsImagesService } from "./services/Product/productsImages/Service"
import { ProductsOptionsService } from "./services/Product/ProductsOptions/Service"
import { ProductsVariantsService } from "./services/Product/ProductsVariants"
import { AdminClient, HttpClient, OAuthClient } from "./utils/HttpClients"

interface Cafe24APIOptions {
  mallId: string,
  getAccessToken: () => Promise<string>,
  clientId: string,
  clientSecret: string,
  apiVersion: string,
}

export class Cafe24API {
  private adminClient: AdminClient
  private oAuthClient: OAuthClient
  private _adminClientInstance: any

  // 서비스 인스턴스를 저장할 private 변수들
  private _products?: ProductsService
  private _productsOptions?: ProductsOptionsService
  private _productsVariants?: ProductsVariantsService
  private _productsImages?: ProductsImagesService
  private _productsAdditionalimages?: ProductsAdditionalimagesService
  private _orders?: OrdersService
  private _ordersCancellation?: OrdersCancellationService
  private _ordersItems?: OrdersItemsService
  private _points?: PointsService
  private _customers?: CustomersService
  private _oAuth?: OAuthService

  constructor(options: Cafe24APIOptions) {
    this.adminClient = new AdminClient({
      mallId: options.mallId,
      getAccessToken: options.getAccessToken,
      apiVersion: options.apiVersion,
    })

    this.oAuthClient = new OAuthClient({
      mallId: options.mallId,
      clientId: options.clientId,
      clientSecret: options.clientSecret,
    })
  }

  // adminClientInstance에 대한 게터
  private get adminClientInstance(): any {
    if (!this._adminClientInstance) {
      this._adminClientInstance = this.adminClient.instance
    }
    return this._adminClientInstance
  }

  // 각 서비스에 대한 게터 메서드
  public get products(): ProductsService {
    if (!this._products) {
      this._products = new ProductsService(this.adminClientInstance)
    }
    return this._products
  }

  public get productsOptions(): ProductsOptionsService {
    if (!this._productsOptions) {
      this._productsOptions = new ProductsOptionsService(this.adminClientInstance)
    }
    return this._productsOptions
  }

  public get productsVariants(): ProductsVariantsService {
    if (!this._productsVariants) {
      this._productsVariants = new ProductsVariantsService(this.adminClientInstance)
    }
    return this._productsVariants
  }

  public get productsImages(): ProductsImagesService {
    if (!this._productsImages) {
      this._productsImages = new ProductsImagesService(this.adminClientInstance)
    }
    return this._productsImages
  }

  public get productsAdditionalimages(): ProductsAdditionalimagesService {
    if (!this._productsAdditionalimages) {
      this._productsAdditionalimages = new ProductsAdditionalimagesService(this.adminClientInstance)
    }
    return this._productsAdditionalimages
  }

  public get orders(): OrdersService {
    if (!this._orders) {
      this._orders = new OrdersService(this.adminClientInstance)
    }
    return this._orders
  }

  public get ordersCancellation(): OrdersCancellationService {
    if (!this._ordersCancellation) {
      this._ordersCancellation = new OrdersCancellationService(this.adminClientInstance)
    }
    return this._ordersCancellation
  }

  public get ordersItems(): OrdersItemsService {
    if (!this._ordersItems) {
      this._ordersItems = new OrdersItemsService(this.adminClientInstance)
    }
    return this._ordersItems
  }

  public get customers(): CustomersService {
    if (!this._customers) {
      this._customers = new CustomersService(this.adminClientInstance)
    }
    return this._customers
  }

  public get points(): PointsService {
    if (!this._points) {
      this._points = new PointsService(this.adminClientInstance)
    }
    return this._points
  }

  public get oAuth(): OAuthService {
    if (!this._oAuth) {
      this._oAuth = new OAuthService(this.oAuthClient.instance)
    }
    return this._oAuth
  }
}