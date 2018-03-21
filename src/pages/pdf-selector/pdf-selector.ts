import { PdfviewerPage } from './../pdfviewer/pdfviewer';
import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PdfSelectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pdf-selector',
  templateUrl: 'pdf-selector.html',
})


export class PdfSelectorPage {
  prueba:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.prueba="wasumasu";
    this.cargardatos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfSelectorPage');
  }
  goPDFViewer(){
    this.navCtrl.push(PdfviewerPage);
  }

  cargardatos() {
     //document.getElementById("contenido").innerHTML = "<p>Hello <b>world</b>!</p>";
    var text = document.createElement("p");
    document.getElementById("contenido").appendChild(text);
  }
}
