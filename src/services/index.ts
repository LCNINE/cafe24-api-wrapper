import { AxiosInstance } from "axios"

export abstract class AbstractService {
  protected client: AxiosInstance

  constructor(client: AxiosInstance) {
    this.client = client
  }
}