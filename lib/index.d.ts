import { Cafe24APIOptions } from "./Cafe24API";
import { ProductService } from "./services/Products";
import { OAuthService } from "./services/OAuth";

export { Cafe24APIOptions };

export declare class Cafe24API {
  private adminClient;
  private oAuthClient;
  Products: ProductService;
  OAuth: OAuthService;
  constructor(options: Cafe24APIOptions);
}

// Products와 OAuth 서비스 타입도 export
export { ProductService } from "./services/Products";
export { OAuthService } from "./services/OAuth";
