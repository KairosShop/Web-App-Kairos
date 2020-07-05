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
  	navigator.geolocation.getCurrentPosition(
  			this.localization.bind(this),
  			()=>console.log('Whoops sometingh went wrong')
  	);
  }

  localization(position) {
  	const lat = position.coords.latitude;
		const lng = position.coords.longitude;

		console.log('Latitude: ', lat, 'Longitud: ', lng);

  	(Mapboxgl as any).accessToken = environment.mapboxKey;
		this.map = new Mapboxgl.Map({
			container: 'map', // container id
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat], // starting position // LNG, LAT
			zoom: 10 // starting zoom
		});
		this.createMarker(lng, lat);
	}

  createMarker(lng: number, lat:number) {
		const marker = new Mapboxgl.Marker({
			draggable: true
		})
		.setLngLat([lng, lat])
		.addTo(this.map);
		
		marker.on('drag', ()=> {
			console.log(marker.getLngLat());
		});
	}

}
