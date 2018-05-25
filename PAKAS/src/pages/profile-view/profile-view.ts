import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, AlertController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { UsuarioProvider } from '../../providers/usuario/usuario';

/**
 * Generated class for the ProfileViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.html',
})
export class ProfileViewPage {

    public users = []; //returns results
    public name;
    public username;
    public lastName;
    public email;
    public password;
    public birthdayDate;
    public bio;
    public site;
    public editFlag: boolean = true;

    public userData = [{
        username:'',
        name:'',
        lastName:'',
        email: '',
        password:'',
        birthdayDate:'',
        emailRec:'',
        bio:'',
        site:'',
      }]

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public firebase: FirebaseProvider,
    public usuario: UsuarioProvider,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alert: AlertController) {
        this.getUserData();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileViewPage');
  }

  back(){
    this.navCtrl.popToRoot();
  }

  async getUserData(){
    try{
        let results = await this.firebase.db().collection("users");
        let query = results.where('user_id','==',this.usuario.get().uid).get().then(
            snapshot=>{
                snapshot.forEach(doc =>{
                    this.users.push(doc.id,doc.data());
                    console.log(doc.id,doc.data());
                    //console.log(this.users[2].email)
                    this.userData = this.users[1];
                    console.log(this.userData);
                })
            }
        );
       
    }catch(e){
        console.log("Erro ao encontrar o documento!");
    }
   
  }

  async save(){
      try{
        let updateUser = await this.firebase.db().collection("users").doc(this.users[0]).update({
            name: this.userData["name"],
            lastName: this.userData["lastName"],
            username: this.userData["username"],
            password: this.userData["password"],
            email: this.userData["email"],
            bio: this.userData["bio"],
            site: this.userData["site"],
        });
        this.navCtrl.popToRoot();
      }catch(e){
        console.log("Erro ao encontrar o documento!"+e);
      }
  }

}
