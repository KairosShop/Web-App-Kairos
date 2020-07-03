import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';



@NgModule({
  declarations: [ButtonComponent, SearchComponent, CartComponent, TopNavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    SearchComponent,
    CartComponent,
    TopNavbarComponent
  ]
})
export class SharedModule { }
