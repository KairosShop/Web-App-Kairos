import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/products/products.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsTable } from '@core/products/products.model'
import { AuthService } from '@core/authentication/auth.service';
import { Product } from '@core/products/products.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public btnNew:boolean = false;

  products: Observable<ProductsTable[]>;

  constructor(
    private productsService: ProductsService,
    private auth: AuthService,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
    const { user } = this.auth.getCookie('user');
    if(user.rol === 'ADMIN') {
      this.btnNew = true;
    }
  }

  fetchProducts() {
    this.products = this.productsService.getAllProducts()
      .pipe(map((products:Product[]) => {
        let tableProducts = [];
        products.map((product) => {
          tableProducts.push({
            status: product.active,
            id: product.id,
            title: product.title,
            quantity: product.quantity,
            measure: product.measure.measure
          })
        })
        return tableProducts
      }))
  }

  redirectProduct() {
    const cookie = this.auth.getCookie('user');
    if (!cookie) {
      console.log('Session close');
      this.router.navigateByUrl('/home');
    }

    const { user } = cookie;
    const { rol } = user;

    if (rol === 'ADMIN') {
      this.router.navigate(['admin/products/new'], {queryParams: {action:'edit'}});
    } else {
      this.router.navigate(['admin/products/new'], {queryParams: {action:'view'}});
    }

  }
}
