import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopListComponent } from './components/shop/shop-list/shop-list.component';
import { CreateShopComponent } from './components/shop/create-shop/create-shop.component';

const routes: Routes = [
  { path: 'shops', component: ShopListComponent },
  { path: 'create-shop', component: CreateShopComponent },
  { path: '', redirectTo: '/shops', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
