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
    id_measure: 0,
    description: 'Cargando',
    id_category: 0,
    id_subcategory: 0,
    url_image: null,
    active: 0,
    cound: 0
  };

  constructor(
    private productsSercice: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    })
  }
  fetchProduct(id: number) {
    this.productsSercice.getProduct(id).subscribe((product: Product) => {
      this.product = product;
    })
  }

}
