import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeroComponent } from './components/hero/hero.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [HeroComponent]
})
export class HomeModule { }
