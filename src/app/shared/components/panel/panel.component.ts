import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/authentication/auth.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() toggle;
  @Input() name = 'name';
  @Input() img = 'assets/super2.png'
 
  constructor(
  	private auth:AuthService,
  	private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
  	this.auth.delteCokie('user');
  	this.router.navigateByUrl('/home');
  }

}
