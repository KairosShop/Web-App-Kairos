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
  public email: string;
  public loginFailed:boolean;

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

    
 		// Post information
 		this.auth.login(this.loginForm.value)
 		.subscribe(response => {
	 		// Redirect to home
       if (response) {
        this.auth.setCookie('user', response, 0);
        console.log('Login Success!!!');
        console.log(this.auth.getCookie('user'));
	      this.router.navigateByUrl('/home');
        return;
       }
       console.log('Login Failed!!!');
       this.loginFailed = true;
 		}, (err)=> {
 			console.error(err.message);
       this.loginFailed = true;
 		});

 		// Reset form
 		this.loginForm.reset();

  }

  forgotPassword() {
    this.forgotPass = !this.forgotPass; 
  }

  recoverPassword() {
    // Send information to backend to validate your password
    this.forgotPass = !this.forgotPass; 
    console.log(this.email);
    this.router.navigateByUrl('/home');
  }

}
