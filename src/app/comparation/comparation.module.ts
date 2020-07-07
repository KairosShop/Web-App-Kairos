import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComparationRoutingModule } from './comparation-routing.module';
import { ComparationComponent } from './components/comparation/comparation.component';


@NgModule({
  declarations: [ComparationComponent],
  imports: [
    CommonModule,
    ComparationRoutingModule
  ]
})
export class ComparationModule { }
