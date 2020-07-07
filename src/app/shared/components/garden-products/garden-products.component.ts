import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@core/categories/categories.model';
import { Product } from '@core/products/products.model';

@Component({
  selector: 'app-garden-products',
  templateUrl: './garden-products.component.html',
  styleUrls: ['./garden-products.component.scss']
})
export class GardenProductsComponent implements OnInit {

  @Input() title:string = 'Title';
  @Input() id: number = 1;
  @Input() type: string = 'category';
  @Input() products: Product;
  @Input() more = false;

  constructor() { }

  ngOnInit(): void {
  }

}
