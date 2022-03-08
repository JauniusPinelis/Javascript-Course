import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShopListComponent } from './components/shop/shop-list/shop-list.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateShopComponent } from './components/shop/create-shop/create-shop.component';
import { EditShopComponent } from './components/shop/edit-shop/edit-shop.component';
import { ShopTableRowComponent } from './components/shop/shop-table-row/shop-table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent,
    NavBarComponent,
    FooterComponent,
    CreateShopComponent,
    EditShopComponent,
    ShopTableRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
