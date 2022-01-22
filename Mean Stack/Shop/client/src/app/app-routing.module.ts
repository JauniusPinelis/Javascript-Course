import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { CreateShopComponent } from './components/create-shop/create-shop.component';

const routes: Routes = [
  { path: 'shops', component: ShopListComponent },
  { path: 'create-shop', component: CreateShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
