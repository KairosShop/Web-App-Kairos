import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsSubcategoryComponent } from './products-subcategory/products-subcategory.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';


const routes: Routes = [
  {
    path:':id',
    component: ProductDetailComponent ,
  },
  {
    path:':idSubCategory',
    component: ProductsSubcategoryComponent ,
  },
  {
    path:':idCategory',
    component: ProductsCategoryComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
