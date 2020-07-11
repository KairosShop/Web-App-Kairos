import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/authentication/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationsService } from '../../../core/authentication/validations.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    public passwordForm: FormGroup;
    public password:boolean=false;

	public user = {
		firstName: 'Armando',
		lastName: 'Rivera',
		phone: 5555555555,
		location: 'Calle derecha esquina con izquierda',
		email: 'armando@rivera.com',
		urlImage: 'https://www.shareicon.net/data/2015/10/09/653498_users_512x512.png'
	}

  constructor(
  	private fb: FormBuilder,
    private auth:AuthService,
    public _validationsService:ValidationsService
  ) { 
    this.createForm();
  }

  ngOnInit(): void {
  	this.getUser();
  }

  saveChanges() {
  	console.log(this.user);
  	this.auth.setCookie('user', this.user, 1);
  	window.location.reload();
  }

  getUser() {
  	const {user} = this.auth.getCookie('user');
  	console.log(user);
  	/*
		Next code will be replace by
		this.user = user;
  	*/
  	/*
  	this.user.firstName = user.firstName;
  	this.user.lastName = user.lastName;
  	this.user.urlImage = user.urlImage;
  	this.user.email = user.email;*/

  }

  logout() {
  	this.auth.delteCokie('user');
  }

  createForm() {
    this.passwordForm = this.fb.group({
      password: ['', Validators.required],
      password2: ['', Validators.required],
    }, {
      validators: this._validationsService.samePassword('password', 'password2')
    });
  }

  changePassword() {
    this.password = !this.password
  }
}
