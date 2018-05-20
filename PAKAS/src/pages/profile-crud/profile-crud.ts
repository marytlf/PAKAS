import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController, FabContainer, ModalController, ToastController, AlertController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { Content } from 'ionic-angular';  

/**
 * Generated class for the ProfileCrudPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'profile-crud',
  templateUrl: 'profile-crud.html',
})
export class ProfileCrudPage {
 // @ViewChild ('subNav') subNav: NavController;
  @ViewChild(Content) content: Content;
  public pagina: any = "";

  public user = {
    username:'',
    name:'',
    lastName:'',
    email: '',
    password:'',
  }

  public passRec ='';



  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public appCtrl: App,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public firebase: FirebaseProvider,
    public alert: AlertController,
    public usuario: UsuarioProvider) {
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileCrudPage');
  }

  scrollToTop() {
    this.content.scrollToTop();
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

  //add no firebase
    async addUserServer(){
        try{
          await this.firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password);
          await this.firebase.db().collection("users").add({
            name: this.user.name,
            lastName: this.user.lastName,
            email: this.usuario.get().email,
            password: this.user.password,
            user_id: this.usuario.get().uid,
          });
          let toastSucess= this.toastCtrl.create({
            message: "Cadastro realizado com sucesso!",
            duration: 2000,
            position: 'bottom'
        });
        toastSucess.present();
        }catch(e){
            let toastError= this.toastCtrl.create({
                message: "Estamos tendo algum problema com o cadastro dos seus dados. \nPor favor tente novamente!",
                duration: 2000,
                position: 'bottom'
            });
            toastError.present();
          throw new Error(e);
        }
    }

//valida campos
  addUser(){
    if(this.user.password != this.passRec){
        console.log(this.user.password+'-'+this.passRec);

        let janela = this.toastCtrl.create({
            message: "As suas senhas não conferem, por favor digite novamente!",
            duration: 2000,
            position: 'bottom'
        });
        janela.present();
    }
    else if((this.user.name == '')||(this.user.lastName == '')||(this.user.username == '')||(this.user.email == '')){
        console.log(this.user.name+','+this.user.lastName+','+this.user.username+','+this.user.email);
        
        let janela = this.toastCtrl.create({
            message: "Preencha todos os campos!",
            duration: 2000,
            position: 'bottom'
        });
        janela.present();
        
    }
    else{
        this.addUserServer();
        this.appCtrl.getRootNav().setRoot('DashboardPage');
    }
   
  }

}
