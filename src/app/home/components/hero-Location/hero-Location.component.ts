import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

import * as Mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

@Component({
	selector: 'app-hero-Location',
	templateUrl: './hero-Location.component.html',
	styleUrls: ['./hero-Location.component.scss']
})
export class HeroLocationComponent implements OnInit {

	public map: Mapboxgl.Map;

	// This are coordinates by default
	public localtion:any = {
			coords: {
				latitude: 19.42847,
				longitude:-99.12766
			}
		};

	private watchId;

  constructor() { }

	ngOnInit(): void {
		this.watchId = navigator.geolocation.watchPosition(
			this.localization.bind(this),
			() => {
				console.error('Whoops something went wrong');
				this.localization(this.localtion);
				
				// Don't follow position
				navigator.geolocation.clearWatch(this.watchId);
			}
		);
	}

	localization(position) {
		const lat = position.coords.latitude;
		const lng = position.coords.longitude;
		this.localtion = position;
		console.log('Latitude: ', lat, 'Longitud: ', lng);
		
		(Mapboxgl as any).accessToken = environment.mapboxKey;
		this.map = new Mapboxgl.Map({
			container: 'map', // container id
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat], // starting position // LNG, LAT
			zoom: 16 // starting zoom
		});
		this.createMarker(lng, lat);
		this.createForwardGeocoder();
		navigator.geolocation.clearWatch(this.watchId);
	}

	createMarker(lng: number, lat: number) {
		const marker = new Mapboxgl.Marker({
			draggable: true,
			color: '#FAA519'
		})
			.setLngLat([lng, lat])
			.addTo(this.map);

		marker.on('drag', () => {
			this.localtion = {
				coords: {
					latitude: marker.getLngLat().lng,
					longitude:marker.getLngLat().lat
				}
			};
		});
	}

	createForwardGeocoder() {
		const geocoder = new MapboxGeocoder({
			accessToken: Mapboxgl.accessToken,
			zoom: 14,
			placeholder: 'Enter search e.g. Lincoln Park',
			mapboxgl: Mapboxgl,
			marker: { draggable: true}
		})

		function results({result}) {
			this.localtion = result;
		};

		this.map.addControl(geocoder);
		geocoder.on('result', results.bind(this));
	}

	saveLocation() {
		if (this.localtion.place_name || this.localtion.geometry) {
		 	console.log(this.localtion.place_name);
			console.log(this.localtion.geometry.coordinates);
		} else {
			console.log('coordinates by default');
			console.log(this.localtion.coords.latitude);
			console.log(this.localtion.coords.longitude);
		}
	}
}