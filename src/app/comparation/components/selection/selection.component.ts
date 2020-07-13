import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  constructor() { }
  selection;
  @Output() idSuper = new EventEmitter();
  @Input() supermarkers = [
    {
      id: 1,
      name: 'cargando',
      urlImagen: 'http://dummyimage.com/229x104.png/dddddd/000000',
    },
    {
      id: 2,
      name: 'cargando',
      urlImagen: 'http://dummyimage.com/229x104.png/dddddd/000000',
    },
    {
      id: 3,
      name: 'cargando',
      urlImagen: 'http://dummyimage.com/229x104.png/dddddd/000000',
    },
  ];
  ngOnInit(): void {

  }
  veritication(id) {
    this.selection = id
  }
  send() {
    this.idSuper.emit(this.selection);
  }
}
