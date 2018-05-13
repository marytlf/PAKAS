import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App} from 'ionic-angular';

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

    public categoria = "categoria";
    public selectResult = '';
    public selectType = '';
    public selectLanguage = '';


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
        public appCtrl: App) {
            
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



}
