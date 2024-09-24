import { Products } from "./endpoints/Products"
import { HttpClient } from "./utils/HttpClient"

interface Cafe24APIOptions {
  mallId: string,
  getAccessToken: () => Promise<string>,
}

export class Cafe24API {
  private httpClient: HttpClient

  public Products: Products

  constructor(options: Cafe24APIOptions) {
    const baseURL = `https://${options.mallId}.cafe24api.com/api/v2/admin`

    this.httpClient = new HttpClient({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        "X-Cafe24-Api-Version": "2024-06-01",
      },
    })
    this.httpClient.setAccessTokenGetter(options.getAccessToken)

    const clientInstance = this.httpClient.instance

    this.Products = new Products(clientInstance)
  }
}