import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController, FabContainer } from 'ionic-angular';

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
  @ViewChild ('subNav') subNav: NavController;
  public pagina: any = '';

  public pushPage: any = '';

  public avatar = 'assets/imgs/alp1.png'

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public appCtrl: App,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComunityListPage');
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

}
