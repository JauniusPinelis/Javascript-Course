import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Shop from 'src/app/models/shop/shop.model';
import { Observable } from 'rxjs';
import CreateShop from 'src/app/models/shop/create-shop.model';
import { Router } from '@angular/router';
import UpdateShop from 'src/app/models/shop/update-shop.model';
import { ServiceBase } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService extends ServiceBase<Shop> {

  constructor(httpClient: HttpClient) { 
    super(httpClient, 'http://localhost:3007/shop')
  }

  public create(createShop: CreateShop): Observable<string>{
    return this.httpClient.post<string>(this.serverUrl, createShop);
  }

  public update(id: string, updateShop: UpdateShop){
    return this.httpClient.put(`${this.serverUrl}/${id}`, updateShop);
  }
}
