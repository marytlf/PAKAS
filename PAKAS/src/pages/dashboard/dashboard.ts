import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController, FabContainer, AlertController, ToastController, ModalController } from 'ionic-angular';

import { UsuarioProvider } from '../../providers/usuario/usuario';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { LoginPage } from '../login/login';

/**
* Generated class for the DashboardPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})

export class DashboardPage {
  //@ViewChild ('subNav') subNav: NavController;
  public pagina: any = "";
  public profile: any = "";
  public openbtn: boolean = false;
  public fabhide : boolean = false;
  public hide: boolean = false;
  public avatar = "assets/imgs/alp1.png";


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public appCtrl: App,
    public viewCtrl: ViewController,
    public firebase: FirebaseProvider,
    public usuario: UsuarioProvider,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alert: AlertController
  ) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    //console.log(this.subNav)
  }

  openFab(){
    document.getElementById("cthheart").style.transformOrigin = "10px";
  }


  openNotf(){
    document.getElementById("mySidenav").style.height = "220px";
    this.hide = true;
  }

  open(paginaPar){
    this.navCtrl.push(paginaPar)
  }
  
  back(){
    console.log(this.navCtrl.getActive());
    if(this.navCtrl.canGoBack)
        this.navCtrl.pop();
    this.navCtrl.push(DashboardPage);
  }

  close(event, fabbtn: FabContainer){
      fabbtn.close();
  }

  async logout(){
    try{
      await this.firebase.auth().signOut();
      this.appCtrl.getRootNav().setRoot(LoginPage);
    }catch(e){
      throw new Error(e);
    }
  }
 
}
