import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComparationService {
  header = [
    {
      id: 2,
      supermarket: "Crown Crafts, Inc.",
      urlImage: "http://dummyimage.com/229x104.png/dddddd/000000",
      all: {
        total_products: 10,
        total_sum: 636
      },
      cheapest: {
        total_products: 10,
        total_sum: 636
      },
    },
    {
      id: 2,
      supermarket: "Super2",
      urlImage: "http://dummyimage.com/229x104.png/dddddd/000000",
      all: {
        total_products: 8,
        total_sum: 637
      },
      cheapest: {
        total_products: 2,
        total_sum: 65
      },
    },
    {
      id: 3,
      supermarket: "SUPER 3",
      urlImage: "http://dummyimage.com/229x104.png/dddddd/000000",
      all: {
        total_products: 10,
        total_sum: 636
      },
      cheapest: {
        total_products: 5,
        total_sum: 63
      },
    },
  ]
  product = [
    {
      id: 5,
      name: 'papitas',
      urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
      supermarkers: [
        {
          idSupermerkert: 1,
          name: 'Super1',
          urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
          price: 10
        },
        {
          idSupermerkert: 1,
          name: 'Super2',
          urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
          price: 10
        },
        {
          idSupermerkert: 1,
          name: 'Super3',
          urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
          price: 10
        },
      ]
    },
  ]

  totalProducts: number;
  totalValue: number;

  headers: Observable<[]>
  products: Observable<[]>
  constructor() { 
  }

  getHeaders() {

  }
}
