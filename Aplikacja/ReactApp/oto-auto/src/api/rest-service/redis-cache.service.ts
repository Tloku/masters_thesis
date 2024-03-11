
export interface RedisRequest { 
    key: string,
    value?: Object
}

export class RedisCacheService {
    private static _http = axios.create({
        baseURL: "http://localhost:3500",
    }); 


    set(key: string, value: Object): Promise<AxiosResponse<any>> {
        return this._http.post<any>(`/set`, {key, value} as RedisRequest)
    }

    get<T>(key: string): Promise<AxiosResponse<T | undefined> {
        return this._http.get<T>(`/get/${key}`)
    }
}