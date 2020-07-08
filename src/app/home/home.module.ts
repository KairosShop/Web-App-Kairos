import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeroLocationComponent } from './components/hero-Location/hero-Location.component';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    HeroLocationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [HeroLocationComponent]
})
export class HomeModule { }
