import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from 'src/app/services/shop.service';
import CreateShop from 'src/app/models/shop/create-shop.model';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.scss']
})
export class CreateShopComponent implements OnInit {

  public shopName: string = '';
  public errorMessage: string = '';

  constructor(
    private shopService:ShopService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public createShop(): void {
    // TODO: validation
    if (this.shopName.length == 0) {
      this.errorMessage = 'Shop name is required';
      return;
    }

    // create shop model
    const createShop: CreateShop = {
      name: this.shopName
    }

    // call the service to create shop
    this.shopService.create(createShop).subscribe((data) => {
       // redirect to shops list
        this.router.navigate(['shops']);
    });
  }

}
