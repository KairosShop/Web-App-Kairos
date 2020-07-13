import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/* index */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";

/* Modules */
import { SharedModule } from './shared/shared.module';
import { CoreModule } from '@core/core.module';
import { HomeModule } from './home/home.module';

/* component */
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    HomeModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
