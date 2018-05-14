import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, FabContainer } from 'ionic-angular';
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
  

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    ) {
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


}
