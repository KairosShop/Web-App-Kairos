import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsSubcategoryComponent } from './products-subcategory/products-subcategory.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { SearchProductsComponent } from './search-products/search-products.component';


const routes: Routes = [
  {
    path:'search/:query',
    component: SearchProductsComponent ,
  },
  {
    path:':id',
    component: ProductDetailComponent ,
  },
  {
    path:'subcategory/:idSubCategory/:title',
    component: ProductsSubcategoryComponent ,
  },
  {
    path:'category/:idCategory/:title',
    component: ProductsCategoryComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
