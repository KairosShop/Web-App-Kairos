import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cheaper',
  templateUrl: './cheaper.component.html',
  styleUrls: ['./cheaper.component.scss']
})
export class CheaperComponent implements OnInit {
  @Output() status = new EventEmitter();
  @Input() supermarkerts = [
    {
      id: 2,
      supermarket: "Cargando",
      urlImage: "http://dummyimage.com/229x104.png/dddddd/000000",
      cheapest: {
        total_products: 0,
        total_sum: 0,
        products: [
          {
            id: 5,
            name: 'Cargando',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 0,
            cound: 0
          },
          {
            id: 5,
            name: 'Cargando',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 0,
            cound: 0
          },
          {
            id: 5,
            name: 'Cargando',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 0,
            cound: 0
          },
          {
            id: 5,
            name: 'Cargando',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 0,
            cound: 0
          },
        ]
      }
    },
    {
      id: 2,
      supermarket: "Cargando",
      urlImage: "http://dummyimage.com/229x104.png/dddddd/000000",
      cheapest: {
        total_products: 0,
        total_sum: 0,
        products: [
          {
            id: 5,
            name: 'Cargando',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 0,
            cound: 0
          },
          {
            id: 5,
            name: 'Cargando',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 0,
            cound: 0
          },
          {
            id: 5,
            name: 'Cargando',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 0,
            cound: 0
          },
          {
            id: 5,
            name: 'Cargando',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 0,
            cound: 0
          },
        ]
      }
    },
    {
      id: 2,
      supermarket: "Cargando",
      urlImage: "http://dummyimage.com/229x104.png/dddddd/000000",
      cheapest: {
        total_products: 0,
        total_sum: 0,
        products: [
          {
            id: 5,
            name: 'Cargando',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 0,
            cound: 0
          },
          {
            id: 5,
            name: 'Cargando',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 0,
            cound: 0
          },
          {
            id: 5,
            name: 'Cargando',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 0,
            cound: 0
          },
          {
            id: 5,
            name: 'Cargando',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 0,
            cound: 0
          },
        ]
      }
    },

  ]
  @Input() totalProducts = 0;
  @Input() totalValue = 0;
  constructor() {

  }

  ngOnInit(): void {

  }
  action(event) {
    this.status.emit(event);
  }


}
