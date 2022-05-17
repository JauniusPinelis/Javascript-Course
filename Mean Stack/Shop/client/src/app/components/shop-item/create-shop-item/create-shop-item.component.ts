import { Component, OnInit } from '@angular/core';
import CreateShopItem from 'src/app/models/shop-item/create-shop-item.model';
import Shop from 'src/app/models/shop/shop.model';
import { ShopItemService } from 'src/app/services/shop-item.service';
import { ShopService } from 'src/app/services/shop.service';
import { CreateShopComponent } from '../../shop/create-shop/create-shop.component';

@Component({
  selector: 'app-create-shop-item',
  templateUrl: './create-shop-item.component.html',
  styleUrls: ['./create-shop-item.component.scss']
})
export class CreateShopItemComponent implements OnInit {

  public availableShops: Shop[] = [];

  public createShopItem: CreateShopItem = {
    name: '',
    price: 0,
    shopId: '',
  };

  constructor(
    private shopItemService: ShopItemService,
    private shopService: ShopService) {
    
  }

  ngOnInit(): void {
    this.shopService.getAll().subscribe((shopsData) => {
      this.availableShops = shopsData;
      console.log(this.availableShops);
    });
  }

  public create(): void {
    this.shopItemService.Create(this.createShopItem).subscribe(() => {
      console.log('shop item was created');
    });
  }

  public clear(): void {
    this.createShopItem = {
      name: '',
      price: 0,
      shopId: '',
    };
  }

}
