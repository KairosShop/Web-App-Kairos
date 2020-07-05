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

	constructor() { }

	ngOnInit(): void {
		navigator.geolocation.watchPosition(
			this.localization.bind(this),
			() => console.log('Whoops sometingh went wrong')
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
			zoom: 16 // starting zoom
		});
		this.createMarker(lng, lat);
		this.createForwardGeocoder();
	}

	createMarker(lng: number, lat: number) {
		const marker = new Mapboxgl.Marker({
			draggable: true,
			color: '#FAA519'
		})
			.setLngLat([lng, lat])
			.addTo(this.map);

		marker.on('drag', () => {
			console.log(marker.getLngLat());
		});
	}


	forwardGeocoder(query) {
		const customData = {
			'features': [
				{
					'type': 'Feature',
					'properties': {
						'title': 'Lincoln Park',
						'description':
							'A northside park that is home to the Lincoln Park Zoo'
					},
					'geometry': {
						'coordinates': [-87.637596, 41.940403],
						'type': 'Point'
					}
				},
				{
					'type': 'Feature',
					'properties': {
						'title': 'Burnham Park',
						'description': "A lakefront park on Chicago's south side"
					},
					'geometry': {
						'coordinates': [-87.603735, 41.829985],
						'type': 'Point'
					}
				},
				{
					'type': 'Feature',
					'properties': {
						'title': 'Millennium Park',
						'description':
							'A downtown park known for its art installations and unique architecture'
					},
					'geometry': {
						'coordinates': [-87.622554, 41.882534],
						'type': 'Point'
					}
				},
				{
					'type': 'Feature',
					'properties': {
						'title': 'Grant Park',
						'description':
							"A downtown park that is the site of many of Chicago's favorite festivals and events"
					},
					'geometry': {
						'coordinates': [-87.619185, 41.876367],
						'type': 'Point'
					}
				},
				{
					'type': 'Feature',
					'properties': {
						'title': 'Humboldt Park',
						'description': "A large park on Chicago's northwest side"
					},
					'geometry': {
						'coordinates': [-87.70199, 41.905423],
						'type': 'Point'
					}
				},
				{
					'type': 'Feature',
					'properties': {
						'title': 'Douglas Park',
						'description':
							"A large park near in Chicago's North Lawndale neighborhood"
					},
					'geometry': {
						'coordinates': [-87.699329, 41.860092],
						'type': 'Point'
					}
				},
				{
					'type': 'Feature',
					'properties': {
						'title': 'Calumet Park',
						'description':
							'A park on the Illinois-Indiana border featuring a historic fieldhouse'
					},
					'geometry': {
						'coordinates': [-87.530221, 41.715515],
						'type': 'Point'
					}
				},
				{
					'type': 'Feature',
					'properties': {
						'title': 'Jackson Park',
						'description':
							"A lakeside park that was the site of the 1893 World's Fair"
					},
					'geometry': {
						'coordinates': [-87.580389, 41.783185],
						'type': 'Point'
					}
				},
				{
					'type': 'Feature',
					'properties': {
						'title': 'Columbus Park',
						'description':
							"A large park in Chicago's Austin neighborhood"
					},
					'geometry': {
						'coordinates': [-87.769775, 41.873683],
						'type': 'Point'
					}
				}
			],
			'type': 'FeatureCollection'
		};
		let matchingFeatures = [];
		for (let i = 0; i < customData.features.length; i++) {
			let feature = customData.features[i];
			// handle queries with different capitalization than the source data by calling toLowerCase()
			if (
				feature.properties.title
					.toLowerCase()
					.search(query.toLowerCase()) !== -1
			) {
				// add a tree emoji as a prefix for custom data results
				// using carmen geojson format: https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
				feature['place_name'] = '🌲 ' + feature.properties.title;
				feature['center'] = feature.geometry.coordinates;
				feature['place_type'] = ['park'];
				matchingFeatures.push(feature);
			}
		}
		return matchingFeatures;
	}

	createForwardGeocoder() {
		// var MapboxGeocoder: any;
		const geocoder = new MapboxGeocoder({
			accessToken: Mapboxgl.accessToken,
			localGeocoder: this.forwardGeocoder,
			zoom: 14,
			placeholder: 'Enter search e.g. Lincoln Park',
			mapboxgl: Mapboxgl
		})

		this.map.addControl(geocoder);

		geocoder.on('result', function ({ result }) {
			console.log(result.place_name);
			console.log(result.geometry.coordinates);
		});
	}
}