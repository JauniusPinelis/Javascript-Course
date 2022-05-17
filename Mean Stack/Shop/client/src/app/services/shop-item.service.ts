import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import CreateShopItem from '../models/shop-item/create-shop-item.model';
import ShopItem from '../models/shop-item/shop-items.model';
import { ServiceBase } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ShopItemService extends ServiceBase<ShopItem> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "http://localhost:3007/shop-item" )
  }

  public Create(createShopItem: CreateShopItem): Observable<ShopItem> {
    return this.httpClient.post<ShopItem>(this.serverUrl, createShopItem);
  }
}
