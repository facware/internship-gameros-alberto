import { PdfviewerPage } from './../pdfviewer/pdfviewer';
import { Component } from '@angular/core';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfSelectorPage');
  }
  goPDFViewer(){
    this.navCtrl.push(PdfviewerPage);
  }

  cargardatos() {
    var text = "";
for (let i = 0; i < 5;  i++) {
    
        text += "<ion-slide>Archivo "+i+" <button ion-button (click)='goPDFViewer()'> Abrir PDF </button> </ion-slide>";   
    
}
document.getElementById("seleccionarPDF").innerHTML = text;
}
}
