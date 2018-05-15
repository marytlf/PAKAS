import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, ToastController, ModalController} from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the TopicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comunity',
  templateUrl: 'comunity.html',
})
export class ComunityPage {

    language: any;
    public categoria = "categoria";
    public selectResult = '';
    public selectType = '';
    public selectLanguage = '';

    public comunities = [];
    public name = '';
    public description = '';
    public tags = '';

    public categories = [
        "Music",
        "Food",
        "Places",
        "LGBT",
        "Games",
        "How-to",
        "Funny",
        "Adult",
        "Pop & Culture",
        "Comics & Cartoons",
        "Politics & Society",
        "Movies & TV Shows",
        "Technology & Education"
    ]

    public logopakas = 'assets/imgs/pakas.png';
    public pagina: any = "ComunityPage";

    constructor(public navCtrl: NavController, public navParams: NavParams,
        public appCtrl: App,
        public usuario: UsuarioProvider,
        public modalCtrl: ModalController,
        public toastCtrl: ToastController,
        public alert: AlertController,
        public firebase: FirebaseProvider,
    ) {
            
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ComunityPage');
    }

    open(paginaPar){
        this.pagina = paginaPar;
        this.appCtrl.getRootNav().setRoot(this.pagina);
    }

    back(){
        this.navCtrl.setRoot("DashboardPage");
    }


  async addComunity(){
    // this.name = name;
    // this.description = description;
    // this.language = language;
    // this.tags = tags;
    try{
      await this.firebase.db().collection("comunities").add({
        name: this.name,
        description: this.description,
        tags: this.tags,
        language: this.selectLanguage,
        category: this.selectResult,
        type: this.selectType,
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


}
