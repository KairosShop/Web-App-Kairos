import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-bottom-menu',
  templateUrl: './side-bottom-menu.component.html',
  styleUrls: ['./side-bottom-menu.component.scss']
})
export class SideBottomMenuComponent implements OnInit {

  @Input() toggle;
	/* This array will be replace for an arry who contains
		real data taken from a service
	 */
	public categories = [1, 2, 3, 4];

  constructor() { }

  ngOnInit(): void {
  }

}
