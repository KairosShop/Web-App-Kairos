import { routes } from "./app-routing.module";
/* import { HomeComponent } from "./home/components/home/home.component";
import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Router, RouterModule } from "@angular/router";
import { NgModuleFactoryLoader, Component, NgModule } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { Location } from "@angular/common";
import { AppComponent } from "./app.component";
import { HomeModule } from "./home/home.module";
import { HttpClientModule } from '@angular/common/http';
 */
describe("App Routing", () => {
/*   let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule.withRoutes(routes),
        BrowserAnimationsModule,
        HomeModule,
        HttpClientModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should navigate to Home", fakeAsync(() => {
    let router = TestBed.get(Router);
    router.initialNavigation();
    //Used to load ng module factories.
    let loader = TestBed.get(NgModuleFactoryLoader);
    let location = TestBed.get(Location);
    // sets up stubbedModules
    loader.stubbedModules = { lazyModule: HomeModule };
    router.resetConfig([
      {
        path: "home",
        loadChildren: 'lazyModule',
      },
    ]);
    router.navigateByUrl("/home");
    tick();
    fixture.detectChanges();
    expect(location.path()).toBe("/home");
  })); */

  it("Should have app as path", () => {
    expect(routes[0].path).toBe("");
    expect(routes[1].path).toBe("login");
    expect(routes[2].path).toBe("register");
    expect(routes[3].path).toBe("admin");
    expect(routes[4].path).toBe("profile");
  });
});
