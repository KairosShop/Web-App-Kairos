import { Component, OnInit, Input } from '@angular/core';
import { ApiRequestsService } from '@core/apiRequest/api-requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comparation',
  templateUrl: './comparation.component.html',
  styleUrls: ['./comparation.component.scss']
})
export class ComparationComponent implements OnInit {

  @Input() cart: string = '0001';

  modal: boolean = false;

  AllInOneView: boolean = false;
  selection: boolean = false;
  CheaperView: boolean = false;
  supermarkerts = [];
  supermarkert = {};
  
  headers = [
    {
      id: 2,
      supermarket: "Crown Crafts, Inc.",
      urlImage: "http://dummyimage.com/229x104.png/dddddd/000000",
      all: {
        total_products: 10,
        total_sum: 636,
        products: [
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
        ]
      },
      cheapest: {
        total_products: 10,
        total_sum: 636,
        products: [
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
        ]
      }
    },
    {
      id: 2,
      supermarket: "Crown Crafts, Inc.",
      urlImage: "http://dummyimage.com/229x104.png/dddddd/000000",
      all: {
        total_products: 10,
        total_sum: 636,
        products: [
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
        ]
      },
      cheapest: {
        total_products: 10,
        total_sum: 636,
        products: [
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
        ]
      }
    },
    {
      id: 2,
      supermarket: "Crown Crafts, Inc.",
      urlImage: "http://dummyimage.com/229x104.png/dddddd/000000",
      all: {
        total_products: 10,
        total_sum: 636,
        products: [
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
        ]
      },
      cheapest: {
        total_products: 10,
        total_sum: 636,
        products: [
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
          {
            id: 5,
            name: 'papitas',
            urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
            price: 5,
            cound: 3
          },
        ]
      }
    },
  ];

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
  ];

  totalProducts: number;
  totalValue: number;

  constructor(
    private apiRequestService: ApiRequestsService,
    private router: Router
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

  modalView() {
    this.modal = !this.modal
  }
  selectSupermarkert(event) {
    this.filterSupermarkers(event)
    this.selection = false;
    this.AllInOneView = true;
  }

  allinone() {
    this.headers.map((item) => {
      let id = item.id;
      let name = item.supermarket;
      let urlImagen = item.urlImage;

      this.supermarkerts.push({
        id,
        name,
        urlImagen
      })
    })
    this.modalView();
    this.selection = true;
  }

  filterSupermarkers(id: number) {
    this.supermarkert = this.headers.filter(item => item.id == id)[0];
    console.log(this.supermarkert)
  }

  action($event) {
    if ($event) {
      this.router.navigateByUrl('/cart/bill');
    } else {
      this.cancel()
    }
  }

  cancel() {
    this.modalView();
    this.modal= false;
    this.AllInOneView= false;
    this.selection= false;
    this.supermarkerts = [];
    this.supermarkert = {};
  }

  Cheaper() {
    this.modalView();
    this.CheaperView = true;
  }

}


