import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class BaseService<T> {

  constructor(protected httpClient: HttpClient) { }

  public GetAll(url:string): Observable<T[]>{
    return this.httpClient.get<T[]>(url);
  }
}
