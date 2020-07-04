import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* index */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Modules */
import { SharedModule } from './shared/shared.module';
import { CoreModule } from '@core/core.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';

/* component */
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    HomeModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
