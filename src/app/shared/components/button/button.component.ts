import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() name: string = 'name';
  @Input() color: string = 'primary';
  @Input() size: string = 'md';
  @Input() icon: string;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
