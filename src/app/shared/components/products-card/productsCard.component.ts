import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@core/products/products.model';

@Component({
  selector: 'app-products-card',
  templateUrl: './productsCard.component.html',
  styleUrls: ['./productsCard.component.scss']
})

export class ProductsCardComponent implements OnInit  {
  @Input() type: string;
  @Input() direction: string;
  @Input() product: Product;
  @Input() superMarkerts: [];

  constructor() {

  }

  ngOnInit(): void {
  }

}
