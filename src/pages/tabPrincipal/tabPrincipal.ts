import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabPrincipalPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-principal',
  templateUrl: 'tab-principal.html'
})
export class TabPrincipalPage {

  selectorPdfRoot = 'SelectorPdfPage'
  contactoRoot = 'ContactoPage'
  usuarioRoot = 'UsuarioPage'


  constructor(public navCtrl: NavController) {}

}
