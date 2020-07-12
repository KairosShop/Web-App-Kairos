import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-in-one',
  templateUrl: './all-in-one.component.html',
  styleUrls: ['./all-in-one.component.scss']
})
export class AllInOneComponent implements OnInit {
  @Input() cart: string = '0001';
  @Input() supermarkert = {
    id: 2,
    supermarket: "Cargando",
    urlImage: "http://dummyimage.com/229x104.png/dddddd/000000",
    all: {
      total_products: 0,
      total_sum: 0,
      products: [
        {
          id: 5,
          name: 'cargando productos',
          urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
          price: 5,
          cound: 3
        }
      ]
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
