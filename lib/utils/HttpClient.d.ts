import { AxiosInstance, AxiosRequestConfig } from 'axios';
export declare class HttpClient {
    private client;
    constructor(config: AxiosRequestConfig);
    get instance(): AxiosInstance;
    private setupInterceptors;
    private handleError;
    private delay;
    private getAccessToken;
    setAccessTokenGetter(getAccessToken: () => Promise<string>): void;
}
