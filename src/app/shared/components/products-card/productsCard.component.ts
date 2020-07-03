import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-card',
  templateUrl: './productsCard.component.html',
  styleUrls: ['./productsCard.component.scss']
})

export class ProductsCardComponent implements OnInit {
  @Input() type: string;
  @Input() product: {
    id:any,
    img:any,
    name:any,
    weight:any,
    description:any,
    cound:any,
    price:number,
    super1:any,
    super2:any,
    super3:any,
  };

  constructor() {

  }

  
  ngOnInit(): void {
    console.log(this.type)
  }

}
