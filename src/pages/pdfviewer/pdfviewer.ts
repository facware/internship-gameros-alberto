import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
/*import { FileOpener } from '@ionic-native/file-opener';*/
/**
 * Generated class for the PdfviewerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pdfviewer',
  templateUrl: 'pdfviewer.html',
})

export class PdfviewerPage {
  dangerousUrl: string;
  trustedUrl: SafeUrl;
  dangerousPdfUrl: string;
  pdfUrl: SafeResourceUrl;
  titulo:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer  ) {
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
    this.updatePdfUrl(this.navParams.data['URL']);

    this.titulo = navParams.data['name'];
  }
  updatePdfUrl(dir: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.dangerousPdfUrl = dir;
    this.pdfUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousPdfUrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfviewerPage');
  }

}