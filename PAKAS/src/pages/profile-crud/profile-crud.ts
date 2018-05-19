import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController, FabContainer, ModalController, ToastController, AlertController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the ProfileCrudPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'profile-crud',
  templateUrl: 'profile-crud.html',
})
export class ProfileCrudPage {
 // @ViewChild ('subNav') subNav: NavController;
  
  public pagina: any = "";

  public username: any = "";
  public name: any = "";
  public lastName: any = "";
  public email: any = "";
  public password: any = "";
  public passRec: any = "";



  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public appCtrl: App,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public firebase: FirebaseProvider,
    public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileCrudPage');
  }


  open(paginaPar){
    this.navCtrl.push(paginaPar)
  }
  
  back(){
    this.navCtrl.pop();
  }

  close(event, fabbtn: FabContainer){
      fabbtn.close();
  }

  addUser(){

    if(this.email == ''){
		let janela = this.toastCtrl.create({
			message: "Informe o email!",
			duration: 2000,
			position: 'bottom'
		});
		janela.present();
      }else{
		let toastEmail = this.toastCtrl.create({
			message: "Cadastro realizado com sucesso!",
			duration: 2000,
			position: 'bottom'
		});
        toastEmail.present();
        this.appCtrl.getRootNav().setRoot('TabsPage');
      }
   
  }

}
