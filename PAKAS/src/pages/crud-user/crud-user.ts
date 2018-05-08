import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CrudUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crud-user',
  templateUrl: 'crud-user.html',
})
export class CrudUserPage {

  public dash: any = "";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController
  ) {
    this.dash = LoginPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrudUserPage');
  }
  
  back(){
    this.navCtrl.setRoot("LoginPage");
  }

  sucess(){
    let toastEmail = this.toastCtrl.create({
      message: "Parabés, você acaba de criar um PAKAS!",
      duration: 3000,
      position: 'middle'
    });
    toastEmail.present();
    this.openDash();
  }

  openDash(){
    this.navCtrl.push("DashboardPage");
  }

}
