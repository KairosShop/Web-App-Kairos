import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComparationRoutingModule } from './comparation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComparationComponent } from './components/comparation/comparation.component';
import { ProductsModule } from '../products/products.module';
import { AllInOneComponent } from './components/all-in-one/all-in-one.component';
import { CheaperComponent } from './components/cheaper/cheaper.component';

@NgModule({
  declarations: [ComparationComponent, AllInOneComponent, CheaperComponent],
  imports: [
    CommonModule,
    ComparationRoutingModule,
    SharedModule,
    ProductsModule
  ]
})
export class ComparationModule { }
