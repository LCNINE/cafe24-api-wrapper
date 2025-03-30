import { Customer } from "./types";

export interface retrieveAListOfCustomersOptions {
  shop_no?: number,
  cellphone?: string[],
  member_id?: string[],
} 

export interface RetrieveAListOfCustomersResponse {
  customers: Customer[];
}