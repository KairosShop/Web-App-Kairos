import { Component, OnInit, Input } from '@angular/core';
import { LayoutComponent } from '../../../layout/layout.component';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  public burguerToggle: boolean = true;
  public nameBtn: string = 'Login';
  public movile: boolean = false;

  @Input() login: boolean;
  @Input() homepage: boolean = true;

  constructor(private layoutComponent: LayoutComponent) {
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

  ngOnInit(): void {
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
    console.log(this.movile)
  }
}

