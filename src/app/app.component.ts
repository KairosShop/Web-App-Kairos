import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Kairos';
  constructor(private sw: SwUpdate) {

  }

  ngOnInit(): void  {
    this.updatePWA();
  }

  updatePWA() {
    this.sw.available.subscribe((value) => {
      window.location.reload();
    })
  }
}
