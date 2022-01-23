import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from 'src/app/services/shop.service';
import Shop from 'src/models/shop.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  public shops:Shop[] = [];

  constructor(private shopService:ShopService, 
    private router:Router) { 
  }
   

  ngOnInit(): void {
    this.shopService.GetShops().subscribe((shops) => {
      this.shops = shops;
    });
  }

  public removeShop(id: string): void {
    this.shopService.removeShop(id).subscribe(() =>
    {
      this.shops = this.shops.filter(shop => shop.id !== id);
    });
  }

}
