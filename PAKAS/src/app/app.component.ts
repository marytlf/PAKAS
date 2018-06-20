import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { Facebook } from '@ionic-native/facebook';
import { Http } from '@angular/http';


@Component({
  templateUrl: 'app.html',
})
export class MyApp {
    @ViewChild('myNav') nav: NavController

    public rootPage:any = "LoginPage";
    public login: boolean = false;
    public loggedFacebook = {login:'false'};

  constructor(public firebase: FirebaseProvider,
            public appCtrl: App,
            public facebook: Facebook,
            public http: Http,
            platform: Platform, 
            statusBar: StatusBar, 
            splashScreen: SplashScreen,
            ) {
                
    

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.firebase.auth().onAuthStateChanged(
      user => {
        if(!user){
            this.rootPage = "LoginPage";
        }else{
            this.rootPage = "DashboardPage";
            this.login=true;
        }
      }
    );
  }


  open(paginaPar) {
    // Let's navigate from TabsPage to Page1
    this.nav.push(paginaPar);
 }
 async logout(){
    try{
        this.login = false;
        await this.firebase.auth().signOut();
        this.appCtrl.getRootNav().setRoot('LoginPage');
    }catch(e){
        throw new Error(e);
    }
}



}

