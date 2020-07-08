import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ButtonComponent } from './components/button/button.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SideBottomMenuComponent } from './components/side-bottom-menu/side-bottom-menu.component';
import { ProductsCardComponent } from './components/products-card/productsCard.component';
import { CategoryComponent } from './components/category/category.component';
import { GardenProductsComponent } from './components/garden-products/garden-products.component';



@NgModule({
  declarations: [
    ButtonComponent,
    SearchComponent,
    CartComponent,
    TopNavbarComponent,
    SideBottomMenuComponent,
    ProductsCardComponent,
    CategoryComponent,
    GardenProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    ButtonComponent,
    SearchComponent,
    CartComponent,
    TopNavbarComponent,
    SideBottomMenuComponent,
    ProductsCardComponent,
    GardenProductsComponent
  ]
})
export class SharedModule { }
