import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public logopakas = 'assets/imgs/pakas2.png';

  constructor(public navCtrl: NavController) {

  }

}
