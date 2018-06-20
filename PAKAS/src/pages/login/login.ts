import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController, ToastController, AlertController } from 'ionic-angular';
import { setupPreloadingImplementation } from 'ionic-angular/util/module-loader';

import { FirebaseProvider } from '../../providers/firebase/firebase'
import { Facebook } from '@ionic-native/facebook';
import { Http } from '@angular/http';



@IonicPage()
@Component({
  selector: 'login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public logopakas = 'assets/imgs/iconllama.png';
  public pagina :any = "";
  public email:string = '';
  public password: string = '';
  public usuario;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public appCtrl: App, 
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public firebase: FirebaseProvider,
    public facebook: Facebook,
    public http: Http,
    public alert: AlertController) {
        this.checkStatus();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  open(paginaPar){
    this.pagina = paginaPar;
    this.appCtrl.getRootNav().setRoot(this.pagina);
  }

  openNewUser(){
    let remember = this.modalCtrl.create('ProfileCrudPage',{name: '', lastName: '', username: '', email:'',password:''});

    remember.onDidDismiss( retorno =>{
      console.log("Modal");
      })
    remember.present();
  }

  forgotPassword(){
    let remember = this.modalCtrl.create("ForgetPassPage",{email: ''});

    remember.onDidDismiss( retorno =>{
      console.log("Modal");
      })
    remember.present();
  }

  testLogin(){
    if((this.email == '') || (this.password == '')){
      let janela = this.toastCtrl.create({
        message: "Informe o email e senha!",
        duration: 3000,
        position: 'bottom'
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
        duration: 2000,
        position: 'bottom'
      });
      janela.present();
      open('DashboardPage');
    }catch(e){
      let janela = this.toastCtrl.create({
        message: "Usuário já cadastrado.",
        duration: 2000,
        position: 'bottom'
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


    async checkStatus(){
        let status = await this.facebook.getLoginStatus();
        if(status.status == 'connected'){
            await this.dadosUsuario();
            open('DashboardPage')
        }else{
            await this.loginFb();
        }
    }

    async dadosUsuario(){
        try{
            let dados = await this.facebook.api(`/me?fields=picture.width(100).height(100),name`,['public_profile']);
            this.usuario['foto'] = dados.picture.data.url;
            this.usuario['nome'] = dados.name;
            this.usuario['logado'] = 'connected';
            
        }
        catch(e){
            throw new Error(e);
        }

    }
    async loginFb(){
        try{
            let permissions = ['public_profile','email'];

            let response = await this.facebook.login(permissions);
            this.usuario['token'] = response.authResponse.accessToken;
            this.usuario['id'] = response.authResponse.userID;
            this.usuario['status'] = response.status;
            await this.dadosUsuario();
            
        }
        catch(e){

            throw new Error(e);
        }
       
    }

    async logoutfb(){
        try{
            await this.facebook.logout();
            this.usuario.logado='false';
        }catch(e){
            throw new Error(e);
        }
        
    }

}

