import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/products/products.service';
import { Product } from '@core/products/products.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product = {
    id: 0,
    title: 'Cargando',
    quantity: 0,
    measureId: 0,
    measure: {
      measure: 'name'
    },
    description: 'Cargando',
    categoryId: 0,
    subcategoryId: 0,
    urlImage: null,
    active: true,
    count: 0
  };
  public productsRetations: Product[];
  id: number;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.fetchProduct(this.id);
    })
  }
  fetchProduct(id: number) {
    this.productsService.getProduct(id).subscribe((product: Product) => {
      this.product = product;
      this.fetchRelactionProducts(product.categoryId)
    })
  }
  fetchRelactionProducts(categoryId: number) {
     this.productsService
      .getProductsOfCategories(categoryId)
          .subscribe((products: Product[]) => {
            this.productsRetations = products.filter(item => item.id != this.id)
            console.log(this.productsRetations)
          })

  }
}
