import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ImageCropperModule } from 'ngx-image-cropper';

import { ButtonComponent } from './components/button/button.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SideBottomMenuComponent } from './components/side-bottom-menu/side-bottom-menu.component';
import { ProductsCardComponent } from './components/products-card/productsCard.component';
import { CategoryComponent } from './components/category/category.component';
import { GardenProductsComponent } from './components/garden-products/garden-products.component';
import { PanelComponent } from './components/panel/panel.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    ButtonComponent,
    SearchComponent,
    CartComponent,
    TopNavbarComponent,
    SideBottomMenuComponent,
    ProductsCardComponent,
    CategoryComponent,
    GardenProductsComponent,
    PanelComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ImageCropperModule
  ],
  exports: [
    RouterModule,
    ButtonComponent,
    SearchComponent,
    CartComponent,
    TopNavbarComponent,
    SideBottomMenuComponent,
    ProductsCardComponent,
    GardenProductsComponent,
    PanelComponent,
    TableComponent,
    ImageCropperModule
  ]
})
export class SharedModule { }
