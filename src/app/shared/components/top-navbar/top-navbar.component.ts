import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LayoutComponent } from '../../../layout/layout.component';
import { AuthService } from '../../../core/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  public burguerToggle: boolean = true;
  public nameBtn: string = 'Login';
  public movile: boolean = false;
  public user;

  @Input() login: boolean;
  @Input() homepage: boolean = true;

  constructor(
    private layoutComponent: LayoutComponent,
    private auth: AuthService,
    private router: Router
  ) {
    if (window.innerWidth < 580) {
      this.nameBtn = null;
    } else {
      this.nameBtn = 'Login';
    }
    if (window.innerWidth < 580 && this.homepage) {
      this.movile = true
    } else {
      this.movile = false
    }
  }

  installEvent = null;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event:Event) {
    console.log(event)
    event.preventDefault();
    this.installEvent = event;
  }

  installByUser() {
    if (this.installEvent) {
      this.installEvent.prompt();
      this.installEvent.userChiice
        .then(rta => {
          console.log(rta)
        });
    }
  }

  ngOnInit(): void {
    this.loginUser();
  }

  vierMenu() {
    this.layoutComponent.viewCategories();
  }

  onResize(event) {
    if (event.target.innerWidth < 580) {
      this.nameBtn = null;
      this.movile = true
    } else {
      this.nameBtn = 'Login';
      this.movile = false
    }
  }

  loginUser() {
    this.user = this.auth.getCookie('user');
  }

  redirect() {
    const { user } = this.auth.getCookie('user');
    switch (user.rol) {
      case "CUSTOMER":
        this.router.navigateByUrl('/profile');
        break;

      case "SUPER MARKET":
        this.router.navigateByUrl('/admin');
        break;

      case "ADMIN":
        this.router.navigateByUrl('/admin');
        break;
    }

    console.log(user.rol)

  }
}

