import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/authentication/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	public user = {
		firstName: 'Armando',
		lastName: 'Rivera',
		phone: 5555555555,
		location: 'Calle derecha esquina con izquierda',
		email: 'armando@rivera.com',
		urlImage: ''
	}

  constructor(
  	private auth: AuthService
  ) { }

  ngOnInit(): void {
  	this.getUser();
  }

  saveChanges() {
  	console.log(this.user);
  }

  getUser() {
  	const userCookie = this.auth.getCookie('user');
  	
  	/*
		Next code will be replace by
		this.user = userCookie;
  	*/
  	
  	this.user.firstName = userCookie.firstName;
  	this.user.lastName = userCookie.lastName;
  	this.user.urlImage = userCookie.urlImage;
  	this.user.email = userCookie.email;

  }
}
