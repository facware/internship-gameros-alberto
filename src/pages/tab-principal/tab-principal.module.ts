import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPrincipalPage } from './tab-principal';

@NgModule({
  declarations: [
    TabPrincipalPage,
  ],
  imports: [
    IonicPageModule.forChild(TabPrincipalPage),
  ]
})
export class TabPrincipalPageModule {}
