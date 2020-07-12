import { Component, OnInit, Input } from '@angular/core';
import { AddCartService } from '@core/addCart/add-cart.service';
import { Product } from '@core/products/products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() homepage: boolean;

  public cart: Product[] = [];
  public animation: boolean = false;
  public count:number=0;

  constructor(
    private _addCartService: AddCartService
  ) {
    console.log('cart component');
    this.count = this.loadCart(this._addCartService.getCart());
  }

  ngOnInit(): void {
    this._addCartService
      .getObservable()
      .subscribe((response: Product[]) => {
         
        this.count = this.loadCart(response);
        this.animation = true;
        setTimeout(() => this.animation=false, 800);
      });
  }

  loadCart(response):number {
    this.cart = response;
    return response
      .map((product:Product) => {
         return product.count;
       })
      .reduce((count, value)=> {
          return count + value;
      }, 0);
  }

}
