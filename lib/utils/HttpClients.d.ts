import { AxiosInstance, AxiosRequestConfig } from 'axios';
export declare class HttpClient {
    protected client: AxiosInstance;
    constructor(config: AxiosRequestConfig);
    get instance(): AxiosInstance;
}
interface AdminClientConfig {
    mallId: string;
    getAccessToken: () => Promise<string>;
}
export declare class AdminClient extends HttpClient {
    constructor(cafe24Config: AdminClientConfig);
    private setupInterceptors;
    private handleError;
    private getAccessToken;
}
interface OAuthClientConfig {
    mallId: string;
    clientId: string;
    clientSecret: string;
}
export declare class OAuthClient extends HttpClient {
    constructor(cafe24Config: OAuthClientConfig);
}
export {};
