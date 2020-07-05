import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

	public homepage: boolean = true;
	public burguerToggle: boolean = false;
	public screen: number;

  @Input() footer: boolean;

  constructor() {
  	this.screen = window.screen.width;
  }

  ngOnInit(): void {
  }
}
