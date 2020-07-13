import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ComparationRoutingModule } from './comparation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComparationComponent } from './components/comparation/comparation.component';
import { ProductsModule } from '../products/products.module';
import { AllInOneComponent } from './components/all-in-one/all-in-one.component';
import { CheaperComponent } from './components/cheaper/cheaper.component';
import { SelectionComponent } from './components/selection/selection.component';
import { BillComponent } from './components/bill/bill.component';

@NgModule({
  declarations: [ComparationComponent, AllInOneComponent, CheaperComponent, SelectionComponent, BillComponent],
  imports: [
    CommonModule,
    ComparationRoutingModule,
    SharedModule,
    ProductsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ComparationModule { }
