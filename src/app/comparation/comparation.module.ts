import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComparationRoutingModule } from './comparation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComparationComponent } from './components/comparation/comparation.component';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [ComparationComponent],
  imports: [
    CommonModule,
    ComparationRoutingModule,
    SharedModule,
    ProductsModule
  ]
})
export class ComparationModule { }
