import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PdfviewerPage } from './pdfviewer';

@NgModule({
  declarations: [
    PdfviewerPage,
  ],
  imports: [
    IonicPageModule.forChild(PdfviewerPage),
  ],
})
export class PdfviewerPageModule {}
