import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Shop from 'src/models/shop.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private server_url = "http://localhost:3007/shop"

  constructor(private httpClient: HttpClient) { }

  public GetShops(): Observable<Shop[]>{
    return this.httpClient.get<Shop[]>(this.server_url);
  }
}
