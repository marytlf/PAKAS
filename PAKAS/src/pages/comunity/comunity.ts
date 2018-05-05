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

    public logopakas = 'assets/imgs/pakas2.png';
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
