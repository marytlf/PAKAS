import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

/**
 * Generated class for the ForgetPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'forget-pass',
  templateUrl: 'forget-pass.html',
})
export class ForgetPassPage {

  public email = '';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPassPage');
  }

  closeOk(){
    this.viewCtrl.dismiss();
  }

  back(){
    this.navCtrl.pop();
  }

  sucess(){

    if(this.email == ''){
		let janela = this.toastCtrl.create({
			message: "Informe o email!",
			duration: 2000,
			position: 'bottom'
		});
		janela.present();
      }else{
		let toastEmail = this.toastCtrl.create({
			message: "Um e-mail de recuperação de senha foi enviado. \n Por favor verificar sua caixa de e-mail.",
			duration: 2000,
			position: 'bottom'
		});
		toastEmail.present();
      }
   
  }


}
