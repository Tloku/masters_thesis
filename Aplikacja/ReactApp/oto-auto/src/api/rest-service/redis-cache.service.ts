import axios, { AxiosResponse } from "axios";

export interface RedisRequest { 
    key: string,
    value?: object
}

export class RedisCacheService {
    private static _http = axios.create({
        baseURL: "http://localhost:3500",
    }); 


    public static set(key: string, value: object): Promise<AxiosResponse> {
        return this._http.post(`/set`, {key, value} as RedisRequest)
    }

    public static get<T>(key: string): Promise<AxiosResponse<T | undefined>> {
        return this._http.get<T>(`/get/${key}`)
    }
}