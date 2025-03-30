import { AbstractService } from "../.."
import { queryMapToString } from "../../../utils/query"
import { retrieveAListOfCustomersOptions, RetrieveAListOfCustomersResponse } from "./dto"

export class CustomersService extends AbstractService {
  async retrieveAListOfCustomers(params: retrieveAListOfCustomersOptions) {
    const queryMap = new Map(Object.entries(params))
    const url = `customers` + queryMapToString(queryMap)

    const res = await this.client.get<RetrieveAListOfCustomersResponse>(url)
    return res.data.customers
  }
}