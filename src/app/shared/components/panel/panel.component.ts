import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() toggle;
  @Input() name = 'name';
  @Input() img = 'assets/super2.png'
  constructor() { }

  ngOnInit(): void {
  }

}
