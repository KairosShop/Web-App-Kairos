// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var firebaseConfig = {
  apiKey: "AIzaSyA5U9xbfZB5MRagJpJEfKgEsYpOhz8waOE",
  authDomain: "kairos-282000.firebaseapp.com",
  databaseURL: "https://kairos-282000.firebaseio.com",
  projectId: "kairos-282000",
  storageBucket: "kairos-282000.appspot.com",
  messagingSenderId: "408189019549",
  appId: "1:408189019549:web:d05f01b40e81d5e50ebb74",
  measurementId: "G-Q1226DJKQ1"
};

export const environment = {
  production: false,
  mapboxKey: 'pk.eyJ1IjoiYXJtYW5kby1yaXZlcmEiLCJhIjoiY2tidmc0eHh5MDVxZjMycWZpenByMWtmZiJ9.yOC42dTFZzhulcp7o3vyNA',
  URL_API: 'https://staging.kairosshop.xyz/api',
  firebaseConfig: firebaseConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
