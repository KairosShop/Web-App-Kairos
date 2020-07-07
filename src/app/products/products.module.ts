import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

/* component */
import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsSubcategoryComponent } from './products-subcategory/products-subcategory.component';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductsCategoryComponent,
    ProductsSubcategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
