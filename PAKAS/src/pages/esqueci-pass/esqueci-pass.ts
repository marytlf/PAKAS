import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

/**
 * Generated class for the EsqueciPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-esqueci-pass',
  templateUrl: 'esqueci-pass.html',
})
export class EsqueciPassPage {

  public email = '';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController) {
    this.email = this.navParams.get('email');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EsqueciPassPage');
  }

  closeOk(){
    this.viewCtrl.dismiss();
  }

  back(){
    this.navCtrl.pop();
  }

  sucess(){
    let toastEmail = this.toastCtrl.create({
      message: "Um e-mail de recuperação de senha foi enviado. \n Por favor verificar sua caixa de e-mail.",
      duration: 3000,
      position: 'middle'
    });
    toastEmail.present();
  }


}
