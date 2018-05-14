import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirebaseProvider } from '../firebase/firebase';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  public usuario = {uid: '', email:''};

  constructor(public firebase: FirebaseProvider,
    public http: HttpClient) {

      this.firebase.auth().onAuthStateChanged(
        user => {
          if(user){
            this.usuario.uid = user.uid;
            this.usuario.email = user.email;
          }
        }

      )
    console.log('Hello UsuarioProvider Provider');
  }

  get(){
    return this.usuario;
  }
}