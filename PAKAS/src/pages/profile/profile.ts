import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController, FabContainer } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  @ViewChild ('subNav') subNav: NavController;
  
  public pagina: any = "";

  public username: any = "mary";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  open(paginaPar){
    this.appCtrl.getRootNav().push(paginaPar);
    this.subNav.push(paginaPar)
  }
  
  back(){
    this.appCtrl.getRootNav().push(DashboardPage);
  }

  close(event, fabbtn: FabContainer){
      fabbtn.close();
  }

}
