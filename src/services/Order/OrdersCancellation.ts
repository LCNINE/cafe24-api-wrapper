import { AbstractService } from "..";
import { ChangeCancellationDetailsReq, ChangeCancellationDetailsRes, CreateAnOrderCancellationReq, CreateAnOrderCancellationRes } from "./types/ordersCancellation/dto";

export class OrdersCancellationService extends AbstractService {
  public async createAnOrderCancellation(orderId: string, data: CreateAnOrderCancellationReq) {
    const url = `orders/${orderId}/cancellation`
    const res = await this.client.post<CreateAnOrderCancellationRes>(url, data)
    return res.data.cancellation
  }

  public async changeCancellationDetails(orderId: string, claimCode: string, data: ChangeCancellationDetailsReq) {
    const url = `orders/${orderId}/cancellation/${claimCode}`
    const res = await this.client.put<ChangeCancellationDetailsRes>(url, data)
    return res.data.cancellation
  }
}