import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SideBottomMenuComponent } from './components/side-bottom-menu/side-bottom-menu.component';
import { ProductsCardComponent } from './components/products-card/productsCard.component';
import { CategoryComponent } from './components/category/category.component';



@NgModule({
  declarations: [
    ButtonComponent,
    SearchComponent,
    CartComponent,
    TopNavbarComponent,
    SideBottomMenuComponent,
    ProductsCardComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    SearchComponent,
    CartComponent,
    TopNavbarComponent,
    SideBottomMenuComponent,
    ProductsCardComponent,
  ]
})
export class SharedModule { }
