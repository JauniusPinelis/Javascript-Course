import { Component, OnInit } from '@angular/core';
import ShopItem from 'src/app/models/shop-item/shop-items.model';
import { ShopItemService } from 'src/app/services/shop-item.service';

@Component({
  selector: 'app-shop-item-list',
  templateUrl: './shop-item-list.component.html',
  styleUrls: ['./shop-item-list.component.scss']
})
export class ShopItemListComponent implements OnInit {

  public shopItems: ShopItem[] = [];

  constructor(private shopItemService: ShopItemService) { }

  ngOnInit(): void {
    this.shopItemService.getAll().subscribe({
      next: (data) => {
        this.shopItems = data;
        console.log(this.shopItems);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("This should never happen");
      }
    });
  }

  public removeShopItem(id: string){
    this.shopItemService.remove(id).subscribe(() => {
      this.shopItems = this.shopItems.filter(si => si.id != id);
    })
  }

}
