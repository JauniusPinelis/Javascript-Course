import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Shop from 'src/models/shop.model';
import { Observable } from 'rxjs';
import CreateShop from 'src/models/create-shop.model';
import { Router } from '@angular/router';
import UpdateShop from 'src/models/update-shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private server_url = "http://localhost:3007/shop"

  constructor(private httpClient: HttpClient) { }

  public GetShops(): Observable<Shop[]>{
    return this.httpClient.get<Shop[]>(this.server_url);
  }

  public CreateShop(createShop: CreateShop): Observable<string>{
    return this.httpClient.post<string>(this.server_url, createShop);
  }

  public removeShop(id: string): Observable<any>{
    return this.httpClient.delete<any>(`${this.server_url}/${id}`);
  }

  public updateShop(id: string, updateShop: UpdateShop){
    return this.httpClient.put(`${this.server_url}/${id}`, updateShop);
  }
}
