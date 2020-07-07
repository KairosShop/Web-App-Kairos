import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/authentication/auth.service';
import { ValidationsService } from '../../../core/authentication/validations.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public loginForm: FormGroup;
  public forgotPass: boolean = false;

  constructor(
  	private fb: FormBuilder,
  	private router: Router,
  	private auth: AuthService,
    public _validationsService:ValidationsService
  ) {
  	this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
  	this.loginForm = this.fb.group({
  		// Define properties
  		email: ['',[Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required]],
  		password: ['', Validators.required]
  	});
  }

  send() {

 		if (this.loginForm.invalid) {
        Object.values(this.loginForm.controls).map(control => {
          if (control.status === "INVALID") {
            control.markAsTouched();
          }
          if (control instanceof FormGroup) {
            Object.values(control.controls).map(control => control.markAsTouched());
          }
        });
        return;
      }

     console.log(this.loginForm.value);

 		// Post information
 		this.auth.login(this.loginForm.value)
 		.subscribe(response => {
	 		// Redirect to home
	 		this.router.navigateByUrl('/home');
 		}, (err)=> {
 			console.log(err.message);
 		});

 		// Reset form
 		this.loginForm.reset();

  }

  forgotPassword() {
    this.forgotPass = !this.forgotPass;
    
  }

}
