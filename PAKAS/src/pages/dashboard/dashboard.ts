import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "100px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.body.style.backgroundColor = "transparent";
  }

  openProfile() {
    this.navCtrl.push(ProfilePage);
  }


}
