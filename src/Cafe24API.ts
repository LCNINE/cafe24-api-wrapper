import { OAuthService } from "./services/OAuth"
import { ProductsService } from "./services/Product/Products"
import { AdminClient, HttpClient, OAuthClient } from "./utils/HttpClients"

interface Cafe24APIOptions {
  mallId: string,
  getAccessToken: () => Promise<string>,
  clientId: string,
  clientSecret: string,
}

export class Cafe24API {
  private adminClient: AdminClient
  private oAuthClient: OAuthClient

  public products: ProductsService
  public oAuth: OAuthService

  constructor(options: Cafe24APIOptions) {
    this.adminClient = new AdminClient({
      mallId: options.mallId,
      getAccessToken: options.getAccessToken,
    })

    this.oAuthClient = new OAuthClient({
      mallId: options.mallId,
      clientId: options.clientId,
      clientSecret: options.clientSecret,
    })

    const adminClientInstance = this.adminClient.instance

    this.products = new ProductsService(adminClientInstance)

    this.oAuth = new OAuthService(this.oAuthClient.instance)
  }
}