import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

	public homepage: boolean = false;
	public burguerToggle: boolean = false;
	public screen: number;

  constructor() {
  	this.screen = window.screen.width;
  	console.log(window.screen.width);
  }

  ngOnInit(): void {
  }
}
