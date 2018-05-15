import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, FabContainer } from 'ionic-angular';
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
  @ViewChild ('subNav') subNav: NavController;
  public pagina: any = "";


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController
  ) {
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
      duration: 2000,
      position: 'bottom'
    });
    toastEmail.present();
    this.open("DashboardPage")
  }

  open(paginaPar){
    this.subNav.push(paginaPar)
  }
  

  close(event, fabbtn: FabContainer){
      fabbtn.close();
  }

  


}
