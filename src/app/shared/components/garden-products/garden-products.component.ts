import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@core/categories/categories.model';

@Component({
  selector: 'app-garden-products',
  templateUrl: './garden-products.component.html',
  styleUrls: ['./garden-products.component.scss']
})
export class GardenProductsComponent implements OnInit {

  @Input() title = 'Title';
  @Input() productsOfCategory: Category;

  constructor() { }

  ngOnInit(): void {
  }

}
