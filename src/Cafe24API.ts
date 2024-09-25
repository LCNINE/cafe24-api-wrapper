import { OAuthService } from "./services/OAuth"
import { ProductService } from "./services/Products"
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

  public Products: ProductService
  public OAuth: OAuthService

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

    this.Products = new ProductService(adminClientInstance)

    this.OAuth = new OAuthService(this.oAuthClient.instance)
  }
}