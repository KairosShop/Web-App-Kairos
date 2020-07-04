import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-card',
  templateUrl: './productsCard.component.html',
  styleUrls: ['./productsCard.component.scss']
})

export class ProductsCardComponent implements OnInit  {
  @Input() type: string;
  @Input() direction: string;
  @Input() product: {
    id: any,
    img: any,
    name: any,
    weight: any,
    description: any,
    cound: any,
    price: number,
    super1: {
      id: any,
      name: any,
      logo: any,
      price: any
    },
    super2: {
      id: any,
      name: any,
      logo: any,
      price: any
    },
    super3: {
      id: any,
      name: any,
      logo: any,
      price: any
    },
  };

  constructor() {

  }

  ngOnInit(): void {
  }

}
