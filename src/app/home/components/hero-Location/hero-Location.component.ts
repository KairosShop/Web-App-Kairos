import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-hero-Location',
  templateUrl: './hero-Location.component.html',
  styleUrls: ['./hero-Location.component.scss']
})
export class HeroLocationComponent implements OnInit {

	public map: Mapboxgl.Map;

  constructor() { }

  ngOnInit(): void {
	Mapboxgl.accessToken = environment.mapboxKey;
	this.map = new Mapboxgl.Map({
		container: 'map', // container id
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [-99.4238064, 19.390519], // starting position // LNG, LAT
		zoom: 6 // starting zoom
	});
  }

}
