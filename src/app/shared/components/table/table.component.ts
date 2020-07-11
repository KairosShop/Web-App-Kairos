import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/authentication/auth.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, OnChanges {
  @Input() Data;
  @Input() title: string = 'Title';
  @Input() btnNew: boolean;
  info = [];
  titles = [];
  constructor(
    private router:Router,
    private authService:AuthService
  ) {

  }

  ngOnInit(): void {
  }
  ngOnChanges(changes) {
    if (changes.Data) {
      this.info = changes.Data.currentValue;
      if (this.info) {
        this.titles = Object.keys(this.info[0])
      }
    }
  }

  redirectProduct() {
    const cookie = this.authService.getCookie('user');
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
