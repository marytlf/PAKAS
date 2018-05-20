import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController, FabContainer } from 'ionic-angular';

/**
 * Generated class for the ListComunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'list-comunity',
  templateUrl: 'list-comunity.html',
})
export class ListComunityPage {
  //@ViewChild ('subNav') subNav: NavController;
  public pagina: any = '';

  public pushPage: any = '';

  public avatar = 'assets/imgs/alp1.png'

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public appCtrl: App,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListComunityPage');
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

}
