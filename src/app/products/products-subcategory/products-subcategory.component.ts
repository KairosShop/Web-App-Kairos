import { Component, OnInit } from '@angular/core';
import { SubCategory } from '@core/subCategories/subCategories.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '@core/products/products.service';
import { SubCategoriesService } from '@core/subCategories/subCategories.service';
import { Product } from '@core/products/products.model';

@Component({
  selector: 'app-products-subcategory',
  templateUrl: './products-subcategory.component.html',
  styleUrls: ['./products-subcategory.component.scss']
})
export class ProductsSubcategoryComponent implements OnInit {
  public products: Product[] = [];
  title: string;
  idSubCategory;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idSubCategory = params.idSubCategory;
      this.title = params.title
      this.fetchProductsOfSubcategories(this.idSubCategory);
    });
  }


  fetchProductsOfSubcategories(idSubcategory) {
    this.productsService.getProductsOfSubcategories(idSubcategory)
      .subscribe((products: Product[]) => {
        this.products = products;
      })
  }

}
