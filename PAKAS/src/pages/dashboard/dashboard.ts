import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController, FabContainer } from 'ionic-angular';
import { ComunityListPage } from '../comunity-list/comunity-list';

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
  @ViewChild ('subNav') subNav: NavController;
  public pagina: any = "";
  public profile: any = "";
  public openbtn: boolean = false;
  public fabhide : boolean = false;
  public hide: boolean = false;


  public tabDashDefault: any; //tab with dash with system language comunities
  public tabDashGlobal: any; //tab with 'explore' with english comunities
  public tabFave: any; //tab for followed comunities update (timeline) (sub tab with list)




  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public appCtrl: App,
    public viewCtrl: ViewController,
  ) {
    this.tabDashDefault = DashboardPage;
    this.tabDashGlobal = ComunityListPage;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    console.log(this.subNav)
  }

  openNotf(){
    document.getElementById("mySidenav").style.height = "220px";
    this.hide = true;
  }
  openNavSide() {
    document.getElementById("ion-list-nav").style.height = "70%";
    document.getElementById("ion-list-nav").style.paddingTop = "130px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    this.hide = false;
    this.openbtn = true;

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
    this.subNav.push(paginaPar)
  }
  
  back(){
    this.subNav.pop();
  }

  close(event, fabbtn: FabContainer){
      fabbtn.close();
  }
}
