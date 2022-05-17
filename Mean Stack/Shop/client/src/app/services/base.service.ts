import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

export abstract class ServiceBase<T> {

    constructor(
        protected httpClient: HttpClient, 
        protected serverUrl: string) { }

    public getAll(): Observable<T[]>{
        return this.httpClient.get<T[]>(this.serverUrl);
    }

    public remove(id: string): Observable<any>{
        return this.httpClient.delete<any>(`${this.serverUrl}/${id}`);
    }
}