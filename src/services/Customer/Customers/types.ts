type MemberAuthentication = 'T' | 'F' | 'B' | 'J';
type BlacklistType = 'P' | 'L' | 'A' | '';
type AuthenticationMethod = null | 'i' | 'm' | 'e' | 'd' | 'a';
type Gender = 'M' | 'F';
type BooleanFlag = 'T' | 'F';

export interface Customer {
  shop_no: number;
  member_id: string;
  group_no: number;
  member_authentication: MemberAuthentication;
  use_blacklist: BooleanFlag;
  blacklist_type: BlacklistType;
  authentication_method: AuthenticationMethod;
  sms: BooleanFlag;
  news_mail: BooleanFlag;
  solar_calendar: BooleanFlag;
  total_points: string;
  available_points: string;
  used_points: string;
  last_login_date: string;
  gender: Gender;
  use_mobile_app: BooleanFlag;
  available_credits: string;
  created_date: string;
  fixed_group: BooleanFlag;
}