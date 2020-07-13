import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { AuthService } from "@core/authentication/auth.service";
import { of } from "rxjs";
import { ValidationsService } from "@core/authentication/validations.service";
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

class AuthServiceStub {
  login() {
    const user = {user:{rol:'CUSTOMER'}}    
    return of(user);
  }
  redirectUser() {
    return true;
  }

  setCookie(){
    return true;
  }
}

class ValidationsServiceStub {
  invalidForm() {
    return true;
  }
}

fdescribe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: ValidationsService, useClass: ValidationsServiceStub },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("When component is initilizated", () => {
    it("Should create the fomrs", () => {
      expect(Object.keys(component.loginForm.controls)).toEqual([
        "email",
        "password",
      ]);
    });
  });

  describe("When fogotPassword is executed", () => {
    it("Should forgot password", () => {
      const value = component.forgotPass;
      component.forgotPassword();
      expect(!value).toEqual(component.forgotPass);
    });
  });

  describe("When recoverPassword is executed", () => {
    it("Should cover password", () => {
      const value = component.forgotPass;
      component.recoverPassword();
      expect(!value).toEqual(component.forgotPass);
    });
  });


  describe("When send is executed", () => {
    it("form invalid when empty", () => {
      expect(component.loginForm.valid).toBeFalsy();
    });

    it("email field validity", () => {
      let errors = {};
      let email = component.loginForm.controls["email"];
      expect(email.valid).toBeFalsy();

      // Email field is required
      errors = email.errors || {};
      expect(errors["required"]).toBeTruthy();

      // Set email to something
      email.setValue("test");
      errors = email.errors || {};
      expect(errors["required"]).toBeFalsy();
      expect(errors["pattern"]).toBeTruthy();

      // Set email to something correct
      email.setValue("test@example.com");
      errors = email.errors || {};
      expect(errors["required"]).toBeFalsy();
      expect(errors["pattern"]).toBeFalsy();
    });

    it("password field validity", () => {
      let errors = {};
      let password = component.loginForm.controls["password"];

      // Email field is required
      errors = password.errors || {};
      expect(errors["required"]).toBeTruthy();

      // Set email to something
      password.setValue("123456");
      errors = password.errors || {};
      expect(errors["required"]).toBeFalsy();

      component.send();

      // Set email to something correct
      password.setValue("123456789");
      errors = password.errors || {};
      expect(errors["required"]).toBeFalsy();
      expect(errors["minlength"]).toBeFalsy();
    });

    it("submitting a form", () => {
      expect(component.loginForm.valid).toBeFalsy();
      component.loginForm.controls["email"].setValue("test@test.com");
      component.loginForm.controls["password"].setValue("123456789");
      expect(component.loginForm.valid).toBeTruthy();

      // Trigger the login function
      component.send();
    });
  });
});
