import * as firebase from 'firebase';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAnTL-PQYyNgPrW6pIaB-IZkEEYBR32WTo",
    authDomain: "gauss-eb67f.firebaseapp.com",
    databaseURL: "https://gauss-eb67f.firebaseio.com",
    projectId: "gauss-eb67f",
    storageBucket: "gauss-eb67f.appspot.com",
    messagingSenderId: "76869520950",
    appId: "1:76869520950:web:dd0d8782baf27e47235297",
    measurementId: "G-H12C3CTFRZ"
  }
};

// firebase.firestore().enablePersistence()
// .catch(function(err) {
//     if (err.code == 'failed-precondition') {
//         // Multiple tabs open, persistence can only be enabled
//         // in one tab at a a time.
//         // ...
//     } else if (err.code == 'unimplemented') {
//         // The current browser does not support all of the
//         // features required to enable persistence
//         // ...
//     }
// });

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
