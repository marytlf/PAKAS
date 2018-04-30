import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController, ToastController } from 'ionic-angular';
import { setupPreloadingImplementation } from 'ionic-angular/util/module-loader';
import { EsqueciPassPage } from '../esqueci-pass/esqueci-pass';
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
  public pagina :any = "";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public appCtrl: App, 
    public modalCtrl: ModalController,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  open(paginaPar){
    this.pagina = paginaPar;
    this.appCtrl.getRootNav().setRoot(this.pagina);
  }

  forgotPassword(){
    let remember = this.modalCtrl.create("EsqueciPassPage",{email: ''});

    remember.onDidDismiss( retorno =>{
      console.log("Modal");
      })
    remember.present();
  }

}
