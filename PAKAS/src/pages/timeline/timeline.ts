import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, FabContainer, ModalController, ToastController, AlertController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { FirebaseProvider } from '../../providers/firebase/firebase';
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
  @ViewChild ('subNav') subNav: NavController;
  public pagina: any = '';
  public avatar = 'assets/imgs/alp3.png'

  public comunities = [];
  public name = '';


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
    this.subNav.push(paginaPar)
  }
  
  back(){
    this.subNav.pop();
  }

  close(event, fabbtn: FabContainer){
      fabbtn.close();
  }
  async adicionar(nameComu){
    this.name = nameComu;
    try{
      await this.firebase.db().collection("divas").add({
        nome: this.name,
        user_id: this.usuario.get().uid
      });
    }catch(e){
      let janela = this.alert.create({
        title: "Opa! Um erro foi detectado!"
      });
      janela.present();

      throw new Error(e);
    }
   
  }


  async listComunities(){
    let results = await this.firebase.db().collection("comunities").get();
    this.comunities = [];
    results.docs.forEach( doc =>{
      this.comunities.push({id: doc.id,...doc.data});
    })
  }


}
