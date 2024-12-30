import { AxiosResponse } from "axios";
import { AbstractService } from "..";
import { queryMapToString } from "../../utils/query";
import { IssueAndDeductPointsParams, IssueAndDeductPointsRequest, IssueAndDeductPointsResponse, Point, PointsTransaction, RetrievePointsRequestParams } from "./types";

export class PointsService extends AbstractService {
  async retrievePoints(params: RetrievePointsRequestParams) {
    const queryMap = new Map(Object.entries(params))
    const url = `points` + queryMapToString(queryMap)

    const res = await this.client.get<{ points: Point[] }>(url)
    return res.data.points
  }


  async IssueAndDeductPoints(params: IssueAndDeductPointsParams) {
    const { shop_no, ...rest } = params
    const body: IssueAndDeductPointsRequest = {
      shop_no,
      request: rest,
    }
    const res = await this.client.post<
      IssueAndDeductPointsResponse, 
      AxiosResponse<IssueAndDeductPointsResponse>, 
      IssueAndDeductPointsRequest
    >("points", body)
    
    return res.data.points
  }
}