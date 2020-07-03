import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SideBottomMenuComponent } from './components/side-bottom-menu/side-bottom-menu.component';
import { CategoryComponent } from './components/category/category.component';



@NgModule({
  declarations: [ButtonComponent, SearchComponent, CartComponent, TopNavbarComponent, SideBottomMenuComponent, CategoryComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    SearchComponent,
    CartComponent,
    TopNavbarComponent,
    SideBottomMenuComponent
  ]
})
export class SharedModule { }
