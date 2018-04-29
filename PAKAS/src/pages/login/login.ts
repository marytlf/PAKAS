import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { setupPreloadingImplementation } from 'ionic-angular/util/module-loader';
import { DashboardPage } from '../dashboard/dashboard';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public logopakas = 'assets/imgs/pakas2.png';

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  abrir(pagina){
    this.appCtrl.getRootNav().setRoot(DashboardPage);
  }

  fechar(){
    this.appCtrl.goBack();
  }
}
