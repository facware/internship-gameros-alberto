
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//Se importa la pagina de Login
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage:any = HomePage;
  //Variable booleana para el cambio de estatus
  isReady:boolean =false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //Se cambia el estado de isReady
      this.isReady=true;
      //Funcion que realiza un cambio de pagina con retraso de 1 segundos
      setTimeout(() => {
        this.setPage(LoginPage);
      }, 1000);
    });
  }

  //Metodo que permite cambiar las paginas que se muestran como rootPage
  public setPage(any:any){
    if (this.isReady) {
      this.rootPage = any;
    } else {
      console.log("Baia baia, algo salio mal");

    }
  }
}
