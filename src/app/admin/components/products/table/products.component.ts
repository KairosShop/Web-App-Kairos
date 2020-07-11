import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/products/products.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsTable } from '@core/products/products.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Observable<ProductsTable[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

  fetchProducts() {
    this.products = this.productsService.getAllProducts()
      .pipe(map((products) => {
        let tableProducts = [];
        products.map((product) => {
          tableProducts.push({
            status: product.active,
            id: product.id,
            title: product.title,
            quantity: product.quantity,
            measure: product.measure.measure
          })
        })
        return tableProducts
      }))
  }

}
