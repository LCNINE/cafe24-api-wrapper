import { AxiosInstance } from "axios";
export declare abstract class AbstractService {
    protected client: AxiosInstance;
    constructor(client: AxiosInstance);
}
