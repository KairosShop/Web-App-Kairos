import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '@core/products/products.service';
import { SubCategoriesService } from '@core/subCategories/subCategories.service';
import { Product } from '@core/products/products.model';
import { SubCategory } from '@core/subCategories/subCategories.model'

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss']
})
export class ProductsCategoryComponent implements OnInit {

  public subcategories: SubCategory[] = [];
  title: string;
  idCategory: number;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private subCategoryService: SubCategoriesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idCategory = params.idCategory;
      this.title = params.title
      this.fetchproductsOfCategory(this.idCategory);
    });
  }

  fetchproductsOfCategory(idCategory) {
    this.subCategoryService.getAllSubCategoriesToCategory(idCategory)
      .subscribe((subCategories: SubCategory[]) => {
        this.subcategories = subCategories;
        this.subcategories.map((item) => {
          this.productsService.getProductsOfSubcategories(item.id)
          .subscribe((products: Product[]) => {
            item.products = products;
          })
        })
      })
  }

}
