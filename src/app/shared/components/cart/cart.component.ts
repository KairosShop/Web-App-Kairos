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
  ) {}

  ngOnInit(): void {
    this._addCartService
      .getObservable()
      .subscribe((response: Product[]) => {
         
         this.count = response
                      .map((product:Product) => {
                         return product.count;
                       })
                      .reduce((count, value)=> {
                          return count + value;
                      }, 0);

        this.cart = response;
        this.animation = true;
        console.log(response);
        setTimeout(() => this.animation=false, 800);
      });
  }

}
