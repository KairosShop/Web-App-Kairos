import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {

  @Input() name: string;
  @Input() color: string = 'primary';
  @Input() size: string = '';
  @Input() icon: string;
  @Input() type: string;
  @Input() onClick: string;
  constructor() { }

  ngOnInit(): void {
  }

}
