import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/authentication/auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

	public can:string;
	public user:string;
  constructor(
  	private auth:AuthService
  ) { }

  ngOnInit(): void {

  	const { user } = this.auth.getCookie('user');
  	const rol = user.rol;

  	if (rol === 'ADMIN') {
  		this.can = 'view and create new products and users';
  	} else {
  		this.can = 'view products and set prices';
  	}
  }

}
