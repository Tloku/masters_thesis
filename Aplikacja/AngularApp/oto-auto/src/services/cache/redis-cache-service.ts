import { HttpClient } from "@angular/common/http";
import { Injectable, } from "@angular/core";
import { Observable, catchError, of } from "rxjs";


export interface RedisRequest { 
    key: string,
    value?: Object
}

@Injectable({
    providedIn: "root"
})
export class RedisCacheService {
    private _redisServerUrl: string = "http://localhost:3500";

    constructor(private _http: HttpClient) {}
    
    set(key: string, value: Object): Observable<any> {
        return this._http.post(`${this._redisServerUrl}/set`, {key, value} as RedisRequest)
            .pipe(
                catchError((error) => {
                    console.error(error);
                    return of(undefined)
                })
            )
    }

    get<T>(key: string): Observable<T | undefined> {
        return this._http.get<T>(`${this._redisServerUrl}/get/${key}`)
            .pipe(
                catchError((error) => {
                    console.error(error);
                    return of(undefined)
                })
            )
    } 
}