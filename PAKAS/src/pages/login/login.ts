import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController, ToastController, AlertController } from 'ionic-angular';
import { setupPreloadingImplementation } from 'ionic-angular/util/module-loader';
import { EsqueciPassPage } from '../esqueci-pass/esqueci-pass';

import { FirebaseProvider } from '../../providers/firebase/firebase'



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public logopakas = 'assets/imgs/iconllama.png';
  public pagina :any = "";
  public email:string = '';
  public password: string = '';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public appCtrl: App, 
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public firebase: FirebaseProvider,
    public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  open(paginaPar){
    this.pagina = paginaPar;
    this.appCtrl.getRootNav().setRoot(this.pagina);
  }

  forgotPassword(){
    let remember = this.modalCtrl.create("EsqueciPassPage",{email: ''});

    remember.onDidDismiss( retorno =>{
      console.log("Modal");
      })
    remember.present();
  }

  testLogin(){
    if((this.email == '') || (this.password == '')){
      let janela = this.toastCtrl.create({
        message: "Informe o email e senha!"
      });
      janela.present();
    }else{
      this.login();
    }
  }

  async login(){
    try{
      await this.firebase.auth().signInWithEmailAndPassword(this.email, this.password);
      let janela = this.toastCtrl.create({
        message: "Login realizado com sucesso!",
        duration: 3000,
        position: 'middle'
      });
      janela.present();
      open('DashboardPage');
    }catch(e){
      let janela = this.toastCtrl.create({
        message: "Usuário já cadastrado.",
        duration: 3000,
        position: 'middle'
      });
      janela.present();
      throw new Error(e);
    }
    
  }

  async criarConta(){
    try{
      await this.firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
    }catch(e){
      throw new Error(e);
    }
  }

}
