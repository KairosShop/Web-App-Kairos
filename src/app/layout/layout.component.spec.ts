import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LayoutComponent } from "./layout.component";
import { ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";

fdescribe("LayoutComponent", () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  let activatedRoute;

  const activatedRouteStub = {
    data: {
      subscribe() {
        return of({login:true,admin:true});
      },
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.get(ActivatedRoute);
    fixture.detectChanges();

  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("When viewCategories is executed", () => {
    it("Should view categoris", () => {
      const valueExpect = component.burguerToggle;
      component.viewCategories();
      expect(!valueExpect).toEqual(component.burguerToggle);
    });
  });
});
