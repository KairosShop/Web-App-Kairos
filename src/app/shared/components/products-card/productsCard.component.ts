import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@core/products/products.model';

import { AddCartService } from '@core/addCart/add-cart.service';

@Component({
  selector: 'app-products-card',
  templateUrl: './productsCard.component.html',
  styleUrls: ['./productsCard.component.scss']
})

export class ProductsCardComponent implements OnInit  {
  @Input() type: string;
  @Input() isLink: boolean = false;
  @Input() direction: string;
  @Input() product: Product;
  @Input() superMarkerts: [];

  constructor(
    private _addCartService:AddCartService
  ) {

  }

  ngOnInit(): void {
  }

  addCart() {
    this._addCartService.addProduct(this.product);
  }

  removeCart() {
    this._addCartService.removeProduct(this.product);
  }

}
