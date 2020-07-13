import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AuthService } from '@core/authentication/auth.service';
import { ValidationsService } from '@core/authentication/validations.service';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

class AuthServiceStub {
  register() {
    return of(true);
  }
  redirectUser() {
    return true;
  }

  setCookie(){
    return true;
  }
}

class ValidationsServiceStub {
  invalidPassword() {
    return true;
  }

  invalidEmail() {
    return true;
  }

  invalidName(){
    return true;
  }

  invalidPassword2(){
    return true;
  }

  invalidLastname(){
    return true;
  }

  samePassword(){
    return (formGroup: FormGroup)=>{
      return true;
    };
  }
}

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: ValidationsService, useClass: ValidationsServiceStub },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("When component is initilizated", () => {
    it("Should create the fomrs", () => {
      expect(Object.keys(component.registerForm.controls)).toEqual([
        "firstName",
        "lastname",
        "email",
        "password",
        "password2"
      ]);
    });
  });


  describe("When send is executed", () => {
    it("form invalid when empty", () => {
      expect(component.registerForm.valid).toBeFalsy();
    });

    it("email field validity", () => {
      let errors = {};
      let email = component.registerForm.controls["email"];
      expect(email.valid).toBeFalsy();

      // Email field is required
      errors = email.errors || {};
      expect(errors["required"]).toBeTruthy();

      // Set email to something
      email.setValue("test");
      errors = email.errors || {};
      expect(errors["required"]).toBeFalsy();
      expect(errors["pattern"]).toBeTruthy();

      component.send();
      // Set email to something correct
      email.setValue("test@example.com");
      errors = email.errors || {};
      expect(errors["required"]).toBeFalsy();
      expect(errors["pattern"]).toBeFalsy();
    });

    it("submitting a form", () => {
      expect(component.registerForm.valid).toBeFalsy();
      component.registerForm.controls["firstName"].setValue("Predo");
      component.registerForm.controls["lastname"].setValue("Perez");
      component.registerForm.controls["email"].setValue("test@test.com");
      component.registerForm.controls["password"].setValue("12345678");
      component.registerForm.controls["password2"].setValue("12345678");
      expect(component.registerForm.valid).toBeTruthy();

      // Trigger the login function
      component.send();
    });
  });
});
