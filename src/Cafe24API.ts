import { PointsService } from "./services/Mileage/Points"
import { OAuthService } from "./services/OAuth"
import { OrdersService } from "./services/Order/Orders"
import { OrdersCancellationService } from "./services/Order/OrdersCancellation"
import { OrdersItemsService } from "./services/Order/OrdersItems"
import { ProductsService } from "./services/Product/Products"
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

  public products: ProductsService
  public orders: OrdersService
  public ordersCancellation: OrdersCancellationService
  public ordersItems: OrdersItemsService
  public points: PointsService
  public oAuth: OAuthService

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

    const adminClientInstance = this.adminClient.instance

    this.products = new ProductsService(adminClientInstance)
    
    this.orders = new OrdersService(adminClientInstance)
    this.ordersCancellation = new OrdersCancellationService(adminClientInstance)
    this.ordersItems = new OrdersItemsService(adminClientInstance)

    this.points = new PointsService(adminClientInstance)

    this.oAuth = new OAuthService(this.oAuthClient.instance)
  }
}