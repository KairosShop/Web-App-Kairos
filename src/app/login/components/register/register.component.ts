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

  constructor(
  	private fb: FormBuilder,
  	private router: Router,
  	private auth:AuthService,
  	public _validationsService:ValidationsService
  ) {
  	this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
  	this.registerForm = this.fb.group({
  		firstName: ['', [Validators.required, Validators.minLength(3)]],
  		lastName: [''],
  		email: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required]],
  		password: ['', Validators.required],
  		password2: ['', Validators.required],
  	}, {
  		validators: this._validationsService.samePassword('password', 'password2')
  	});
  }

  send() {
  	if (this.registerForm.invalid) {
        Object.values(this.registerForm.controls).map(control => {
          if (control.status === "INVALID") {
            control.markAsTouched();
          }
          if (control instanceof FormGroup) {
            Object.values(control.controls).map(control => control.markAsTouched());
          }
        });
        return;
      }

 		// Post information
 		this.auth.register(this.registerForm.value)
 		.subscribe(response => {
	 		// Redirect to home
	 		console.log(response);
	 		this.router.navigateByUrl('/home');
 		}, (err)=> {
 			console.log(err.message);
 		});

 		// Reset form
 		this.registerForm.reset();
  }
}
