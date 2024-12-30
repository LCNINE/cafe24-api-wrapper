export type PointCaseType =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z"
  | "AA"
  | "AB"
  | "AD"
  | "AE"
  | "AF"
  | "AG"
  | "AH"
  | "AI"
  | "AK"
  | "AL"
  | "AM"
  | "AN"
  | "AO"
  | "AP"
  | "AQ"
  | "AR"
  | "AS"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";

export type PointsCategory = "available" | "unavailable" | "unavailable_coupon"

export interface RetrievePointsRequestParams {
  shop_no?: number;            // default: 1
  member_id?: string;          // 최대 20자
  email?: string;              
  order_id?: string;           // 최대 100자
  group_no?: number;
  start_date: string;          // required, 날짜 형식 (예: 2019-01-01T00:00:00+09:00)
  end_date: string;            // required, 날짜 형식
  case?: PointCaseType;        // 적립금 타입
  points_category?: PointsCategory; // default: "available"
  offset?: number;             // default: 0, 최대값: 8000
  limit?: number;              // default: 10, 1~100
}

export interface Point {
  shop_no: number;
  case: string;
  member_id: string;
  email: string;
  group_name: string;
  available_points_increase: string | null;
  available_points_decrease: string | null;
  available_points_total: string;
  unavailable_points: string | null;
  order_date: string | null;
  issue_date: string;
  available_date: string | null;
  admin_id: string;
  admin_name: string | null;
  order_id: string | null;
  reason: string;
}


// 적립금 증감 타입
export type PointsTransactionType = "increase" | "decrease";

// 적립금 처리 공통 필드 타입
export interface PointsTransaction {
  shop_no: number; // 멀티쇼핑몰 번호
  member_id: string; // 회원아이디
  order_id?: string; // 주문번호 (선택)
  amount: string; // 적립금 증감액 (최소값 0, 최대 1,000,000)
  type: PointsTransactionType; // 적립금 증가/차감 여부
  reason?: string; // 적립 사유 (선택)
}

export interface IssueAndDeductPointsParams {
  shop_no?: number;
  member_id: string; 
  order_id?: string; 
  amount: string; 
  type: PointsTransactionType;
  reason?: string; 
}

export interface IssueAndDeductPointsRequest {
  shop_no?: number; // 멀티쇼핑몰 번호, default: 1
  request: Omit<PointsTransaction, "shop_no">; // shop_no 제외한 공통 필드 사용
}

export interface IssueAndDeductPointsResponse {
  points: PointsTransaction;
}
