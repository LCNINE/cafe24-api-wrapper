import { ProductService } from "./services/Products";
import { OAuthService } from "./services/OAuth";

export interface Cafe24APIOptions {
  mallId: string;
  getAccessToken: () => Promise<string>;
  clientId: string;
  clientSecret: string;
}

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
