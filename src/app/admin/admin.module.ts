import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './components/products/table/products.component';
import { ProductsDetailComponent } from './components/products/products-detail/products-detail.component';
import { DetailUserComponent } from './components/users/detail-user/detail-user.component';
import { TableUserComponent } from './components/users/table-user/table-user.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsDetailComponent,
    DetailUserComponent,
    TableUserComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
