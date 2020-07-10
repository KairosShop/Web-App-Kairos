import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '@core/products/products.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, OnChanges {
  @Input() Data;
  @Input() title: string = 'Title';
  info = [];
  titles = [];
  constructor() {

  }

  ngOnInit(): void {
  }
  ngOnChanges(changes) {
    if (changes.Data) {
      this.info = changes.Data.currentValue;
      if (this.info) {
        this.titles = Object.keys(this.info[0])
      }
    }
  }


}
