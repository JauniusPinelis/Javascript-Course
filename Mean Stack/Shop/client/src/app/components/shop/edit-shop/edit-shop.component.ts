import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import Shop from 'src/app/models/shop/shop.model';
import UpdateShop from 'src/app/models/shop/update-shop.model';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.scss']
})
export class EditShopComponent implements OnInit {
  @Input() shop: Shop = {
    id: '',
    createdUtc: new Date(),
    name: ''
  };
  @Output() updateShopEvent = new EventEmitter<any>();

  public shopName: string = this.shop.name;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.shopName = this.shop.name;
  }

  public updateShop(){
   let updateShopInformation = {
     id: this.shop.id,
     name: this.shopName
   };

   this.updateShopEvent.emit(updateShopInformation)
  }
}
