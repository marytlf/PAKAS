	import { Component, ViewChild } from '@angular/core';
	import { IonicPage, NavController, NavParams, App, ViewController, FabContainer, AlertController, ToastController, ModalController } from 'ionic-angular';

	import { UsuarioProvider } from '../../providers/usuario/usuario';
	import { FirebaseProvider } from '../../providers/firebase/firebase';
	import { LoginPage } from '../login/login';
import { Camera } from '@ionic-native/camera';

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
	//@ViewChild ('subNav') subNav: NavController;
	public pagina: any = "";
	public profile: any = "";
	public openbtn: boolean = false;
	public fabhide : boolean = false;
	public hide: boolean = false;
	public avatar = "assets/imgs/alp1.png";
    public foto = '';

	constructor(public navCtrl: NavController, 
	public navParams: NavParams, 
	public appCtrl: App,
	public viewCtrl: ViewController,
	public firebase: FirebaseProvider,
	public usuario: UsuarioProvider,
	public modalCtrl: ModalController,
	public toastCtrl: ToastController,
    public alert: AlertController,
    public camera: Camera,
    
	) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DashboardPage');
		//console.log(this.subNav)
	}

	open(paginaPar){
		this.navCtrl.push(paginaPar)
	}

	back(){
		this.navCtrl.push(DashboardPage);
	}

	close(event, fabbtn: FabContainer){
		fabbtn.close();
	}

	async logout(){
		try{
			await this.firebase.auth().signOut();
			this.appCtrl.getRootNav().setRoot('LoginPage');
		}catch(e){
			throw new Error(e);
		}
    }
    

    async tirarFoto(){
        try{
            let opcoes = {
                quality: 95,
                destinationType:this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
            };
    
            let captura = await this.camera.getPicture(opcoes);
            this.foto = 'data:image/jpeg;base64,' + captura;
            console.log(this.foto);
        }catch(e){
            throw new Error(e);
        }
        

    }


	}
