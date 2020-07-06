import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-garden-products',
  templateUrl: './garden-products.component.html',
  styleUrls: ['./garden-products.component.scss']
})
export class GardenProductsComponent implements OnInit {
  @Input() title = 'Title';
  @Input() products = [
    {
      "id": 26,
      "title": "Espinaca baby Marketside",
      "quantity": 250,
      "id_measure": 2,
      "description": "Marketside es una manera saludable de mantener en forma tu salud y bienestar.",
      "id_category": 2,
      "id_subcategory": 19,
      "url_image": "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750179166766L.jpg",
      "active": 1
    },
    {
      "id": 26,
      "title": "Espinaca baby Marketside",
      "quantity": 250,
      "id_measure": 2,
      "description": "Marketside es una manera saludable de mantener en forma tu salud y bienestar.",
      "id_category": 2,
      "id_subcategory": 19,
      "url_image": "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750179166766L.jpg",
      "active": 1
    },
    {
      "id": 26,
      "title": "Espinaca baby Marketside",
      "quantity": 250,
      "id_measure": 2,
      "description": "Marketside es una manera saludable de mantener en forma tu salud y bienestar.",
      "id_category": 2,
      "id_subcategory": 19,
      "url_image": "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750179166766L.jpg",
      "active": 1
    },
    {
      "id": 26,
      "title": "Espinaca baby Marketside",
      "quantity": 250,
      "id_measure": 2,
      "description": "Marketside es una manera saludable de mantener en forma tu salud y bienestar.",
      "id_category": 2,
      "id_subcategory": 19,
      "url_image": "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750179166766L.jpg",
      "active": 1
    },
    {
      "id": 26,
      "title": "Espinaca baby Marketside",
      "quantity": 250,
      "id_measure": 2,
      "description": "Marketside es una manera saludable de mantener en forma tu salud y bienestar.",
      "id_category": 2,
      "id_subcategory": 19,
      "url_image": "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750179166766L.jpg",
      "active": 1
    },
    {
      "id": 26,
      "title": "Espinaca baby Marketside",
      "quantity": 250,
      "id_measure": 2,
      "description": "Marketside es una manera saludable de mantener en forma tu salud y bienestar.",
      "id_category": 2,
      "id_subcategory": 19,
      "url_image": "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750179166766L.jpg",
      "active": 1
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
