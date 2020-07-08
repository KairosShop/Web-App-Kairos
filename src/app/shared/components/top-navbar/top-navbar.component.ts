import { Component, OnInit, Input } from '@angular/core';
import { LayoutComponent } from '../../../layout/layout.component';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

	public burguerToggle: boolean = true;

  @Input() footer: boolean;
  @Input() homepage: boolean = true;

  constructor(private layoutComponent: LayoutComponent  ) {
  }

  ngOnInit(): void {
  }
  vierMenu() {
    this.layoutComponent.viewCategories();
  }
}
