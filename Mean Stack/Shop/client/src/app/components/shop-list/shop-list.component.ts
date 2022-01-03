import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import Shop from 'src/models/shop.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  public shops:Shop[] = [];

  constructor(private shopService:ShopService) {
  }
   

  ngOnInit(): void {
    this.shopService.GetShops().subscribe((shops) => {
      this.shops = shops;
    });
  }

}
