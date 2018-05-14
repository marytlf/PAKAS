import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import "firebase/firestore";


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public http: HttpClient) {

    var config = {
      apiKey: "AIzaSyDHueV83vwxeBhJJ_WnXD66k3yvHib36G0",
      authDomain: "pakas-app.firebaseapp.com",
      databaseURL: "https://pakas-app.firebaseio.com",
      projectId: "pakas-app",
      storageBucket: "pakas-app.appspot.com",
      messagingSenderId: "21534089992"
    };
    firebase.initializeApp(config);
  }

  db(){
    console.log(firebase.firestore());
    return firebase.firestore();
  }

  auth(){
    console.log(firebase.auth());
    return firebase.auth();
  }

}