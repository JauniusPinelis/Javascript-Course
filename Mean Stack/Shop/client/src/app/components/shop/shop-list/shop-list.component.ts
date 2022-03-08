import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from 'src/app/services/shop.service';
import Shop from 'src/models/shop.model';
import UpdateShop from 'src/models/update-shop.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  public editShop: Shop = {
    id: '',
    name: '',
    createdUtc: new Date()
  };
  public isEditDisplayed: boolean = false;
  public editMessage: string = '';

  public shops:Shop[] = [];

  constructor(private shopService:ShopService, 
    private router:Router) { 
  }
   

  ngOnInit(): void {
    this.shopService.GetShops().subscribe((shops) => {
      this.shops = shops;
    });
  }

  public displayEdit(shop: Shop){
    this.isEditDisplayed = true;
    this.editShop = shop;
  }
  

  public removeShop(id: string): void {
    this.shopService.removeShop(id).subscribe(() =>
    {
      this.shops = this.shops.filter(shop => shop.id !== id);
    });
  }

  public updateShop(updateInformation: any){
    let id = updateInformation.id;
    let name = updateInformation.name;

    let updateShopBody: UpdateShop = {
      name: name
    }

    this.shopService.updateShop(id,  updateShopBody).subscribe((successData) => {
      let shopToUpdate = this.shops.find(s => s.id == id);
      if (shopToUpdate != null){
        shopToUpdate.name = updateShopBody.name
        this.editMessage = 'Success';
      }
    }, (errorMessage) => {
      this.editMessage = errorMessage.message;
    });
  }

}
