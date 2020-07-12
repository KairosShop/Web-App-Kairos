import { Component, OnInit, Input } from '@angular/core';
import { ApiRequestsService } from '@core/apiRequest/api-requests.service';

@Component({
  selector: 'app-comparation',
  templateUrl: './comparation.component.html',
  styleUrls: ['./comparation.component.scss']
})
export class ComparationComponent implements OnInit {

  @Input() cart: string = '0001';

  headers = [
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
  products = [
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
  constructor(
    private apiRequestService: ApiRequestsService
  ) { }

  ngOnInit(): void {
    /*     this.fetchComparation(); */
    this.totalProducts = this.headers.reduce((acumulador, item) => acumulador + item.cheapest.total_products, 0)
    this.totalValue = this.headers.reduce((acumulador, item) => acumulador + item.cheapest.total_sum, 0)

  }
  fetchComparation() {
    /*     this.apiRequestService.postMicroservice(this.cart).subscribe((comparation) => {
        }) */
  }

}


