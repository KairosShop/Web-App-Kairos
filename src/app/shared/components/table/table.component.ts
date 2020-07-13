import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/authentication/auth.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, OnChanges {
  @Input() Data;
  @Input() title: string = 'Title';
  @Input() btnNew: boolean;
  @Output() btnNewAction = new EventEmitter();
  info = [];
  titles = [];
  constructor(

  ) {

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

  send() {
    this.btnNewAction.emit(true);
  }

}
