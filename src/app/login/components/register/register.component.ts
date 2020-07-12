import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationsService } from '../../../core/authentication/validations.service';
import { AuthService } from '../../../core/authentication/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public supermarket: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    public _validationsService: ValidationsService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastname: [''],
      address: [''],
      email: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required]],
      password: ['', Validators.required, Validators.minLength(8), Validators.maxLength(30)],
      password2: ['', Validators.required, Validators.minLength(8), Validators.maxLength(30)],
    }, {
      validators: this._validationsService.samePassword('password', 'password2')
    });
  }

  send() {
    delete this.registerForm.controls.address;
    if (this.registerForm.invalid) {
      Object.values(this.registerForm.controls).map(control => {
        if (control.status === "INVALID") {
          control.markAsTouched();
        }
      });
      return;
    }

    // Post information
    this.auth.register(this.registerForm.value, this.supermarket)
      .subscribe(response => {
        // Redirect to home
        console.log(response);
        this.router.navigateByUrl('/home');
      }, (err) => {
        console.log(err.message);
      });

    // Reset form
    this.registerForm.reset();
  }

  supermarketFunc() {
    this.supermarket = !this.supermarket;
  }
}
