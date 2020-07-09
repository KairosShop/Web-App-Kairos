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
		urlImage: 'https://www.shareicon.net/data/2015/10/09/653498_users_512x512.png'
	}

  constructor(
  	private auth: AuthService
  ) { }

  ngOnInit(): void {
  	this.getUser();
  }

  saveChanges() {
  	console.log(this.user);
  	this.auth.setCookie('user', this.user, 1);
  	window.location.reload();
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

  logout() {
  	this.auth.delteCokie('user');
  }
}
