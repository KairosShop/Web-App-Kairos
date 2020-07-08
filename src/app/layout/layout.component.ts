import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {
  public footer: boolean = false;
  public burguerToggle: boolean = false;

  constructor(private route: ActivatedRoute,) {
    route.data.subscribe(({ footer }) => {
      if (footer) {
        this.footer = footer;
      }
    })
  }

  ngOnInit(): void {

  }
  viewCategories() {
    this.burguerToggle = !this.burguerToggle
  }
}
