import { Injectable, OnInit } from "@angular/core";
import { RedisClientType, createClient } from "redis";

@Injectable({
    providedIn: "root"
})
export class RedisCacheService implements OnInit {

    client: RedisClientType | undefined; 

    ngOnInit(): void {
        this.client = createClient({
            url: 'redis://localhost:6379/'
        })
    }

    
    async save(key: string, value: Object): Promise<void> {
        if (!this.client) {
            return;
        }
        
        await this.client.connect()
        this.client.set(key, JSON.stringify(value));
    }

    async get<T>(key: string): Promise<T | undefined> {
        if (!this.client) {
            return undefined;
        }

        await this.client.connect()

        const value: string | null = await this.client.get(key);

        if (value) {
            return JSON.parse(value) as T;
        }

        return undefined;
    } 
}