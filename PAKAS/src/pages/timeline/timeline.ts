import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, FabContainer, ModalController, ToastController, AlertController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { CommonModule } from '@angular/common';

/**
 * Generated class for the TimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {
  //@ViewChild ('subNav') subNav: NavController;
  public pagina: any = '';
  public avatar = 'assets/imgs/alp3.png'

  public comunities = [];
  public name = '';
  public description = '';
  public language = '';
  public tags = '';


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public firebase: FirebaseProvider,
    public usuario: UsuarioProvider,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alert: AlertController
    ) {
      this.listComunities();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
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

  async listComunities(){
    let results = await this.firebase.db().collection("comunities").get();
    this.comunities = [];
    results.docs.forEach( doc =>{
      this.comunities.push({id: doc.id, ...doc.data()});
    })
  }


}
