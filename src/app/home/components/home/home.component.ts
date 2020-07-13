import { Component, OnInit } from '@angular/core';
import { Product } from '@core/products/products.model';
import { Category } from '@core/categories/categories.model';
import { CategoriesService } from '@core/categories/categories.service';
import { ProductsService } from '@core/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public productsOfCategory: Category[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProductsofCategoria();
  }

  fetchProductsofCategoria() {
    this.categoriesService.getAllCategories().subscribe((categories: Category[]) => {
      this.productsOfCategory = categories;
      this.productsOfCategory.map((item) => {
        this.productsService.getProductsOfCategories(item.id)
          .subscribe((products: Product[]) => {
            item.products = products;
          })
      })
    })
  }
}
