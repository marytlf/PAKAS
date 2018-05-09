import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController } from 'ionic-angular';

/**
 * Generated class for the ComunityListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comunity-list',
  templateUrl: 'comunity-list.html',
})
export class ComunityListPage {

  public pagina: any = '';

  public pushPage: any = '';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public appCtrl: App,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComunityListPage');
  }



  open(paginaPar){
    this.pagina = paginaPar;
    this.appCtrl.getRootNav().setRoot(this.pagina);
  }

  openTest(paginaPar){
    this.pagina = paginaPar;
    this.navCtrl.push(paginaPar);
  }

  back(){
    this.navCtrl.pop();
  }


}
