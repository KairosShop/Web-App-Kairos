import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kairos';
  products = [
    {
      id: 1,
      img: '/assets/milo.png',
      name: 'Cereal Milo® Caja',
      weight: '500 Gr',
      description: 'NESTLE,MILO es un cereal para el desayuno el cual te llena de energía.',
      price:10,
      super1:
      {
        id: 1,
        name: 'super1',
        logo: 'assets/super1.png',
        price: 2
      },
      super2:
      {
        id: 2,
        name: 'super2',
        logo: 'assets/super2.png',
        price: 4
      },
      super3:
      {
        id: 3,
        name: 'super3',
        logo: 'assets/super3.png',
        price: 3
      },
    },
    {
      id: 1,
      img: '/assets/milo.png',
      name: 'Cereal Milo® Caja',
      weight: '500 Gr',
      description: 'NESTLE,MILO es un cereal para el desayuno el cual te llena de energía.',
      cound: 2,
      super1:
      {
        id: 1,
        name: 'super1',
        logo: 'assets/super1.png',
        price: 2
      },
      super2:
      {
        id: 2,
        name: 'super2',
        logo: 'assets/super2.png',
        price: 4
      },
      super3:
      {
        id: 3,
        name: 'super3',
        logo: 'assets/super3.png',
        price: 3
      },
    },
    {
      id: 1,
      img: '/assets/milo.png',
      name: 'Cereal Milo® Caja',
      weight: '500 Gr',
      cound:0,
      description: 'NESTLE,MILO es un cereal para el desayuno el cual te llena de energía.',
      super1:
      {
        id: 1,
        name: 'super1',
        logo: 'assets/super1.png',
        price: 2
      },
      super2:
      {
        id: 2,
        name: 'super2',
        logo: 'assets/super2.png',
        price: 4
      },
      super3:
      {
        id: 3,
        name: 'super3',
        logo: 'assets/super3.png',
        price: 3
      },
    },
  ]
}
