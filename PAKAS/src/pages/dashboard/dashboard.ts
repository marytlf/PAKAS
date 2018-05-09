import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController } from 'ionic-angular';
/**
* Generated class for the DashboardPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  
  public pagina: any = "";
  public profile: any = "";
  
  public teste: any = 0;
  
  public hide: boolean = false;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public appCtrl: App,
    public viewCtrl: ViewController,
  ) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  openNotf(){
    document.getElementById("mySidenav").style.height = "220px";
    this.hide = true;
  }
  openNavSide() {
    document.getElementById("ion-list-nav").style.height = "70%";
    document.getElementById("ion-list-nav").style.paddingTop = "130px";
    document.getElementById("btn-side").style.height = "90%";
    document.getElementById("btn-side").style.transform = "rotateZ(-45deg);";
    // document.getElementById("btn-side").style.transformOrigin = "50% 50% 0";
    document.getElementById("btn-side").style.webkitTransform = "rotateZ(-90deg)";;
    // document.getElementById("btn-side").style.webkitTransformOrigin = "50% 50% 0";

    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    this.hide = false;
  }
  
  closeNavSide(){
    document.getElementById("mySidenav").style.height = "0px";
    document.getElementById("ion-list-nav").style.height = "0px";
    this.hide = false;
    document.body.style.backgroundColor = "transparent";
    
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "260px";
    document.getElementById("ion-list-nav").style.width = "260px";
    this.hide = true;
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("ion-list-nav").style.width = "67px";
    this.hide = false;
    document.body.style.backgroundColor = "transparent";
    
  }
  open(paginaPar){
    this.pagina = paginaPar;
    this.appCtrl.getRootNav().setRoot(this.pagina);
  }
  
  back(){
    this.appCtrl.goBack();
  }
  
}
