import { AxiosInstance } from "axios";
import { AbstractService } from ".";
export declare class OAuthService extends AbstractService {
    constructor(client: AxiosInstance);
    refreshToken(refreshToken: string): Promise<Cafe24AccessToken>;
}
type Cafe24AccessToken = {
    access_token: string;
    expires_at: string;
    refresh_token: string;
    refresh_token_expires_at: string;
    client_id: string;
    mall_id: string;
    user_id: string;
    scopes: string[];
    issued_at: string;
};
export {};
