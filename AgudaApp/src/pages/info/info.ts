import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoTabsPage } from '../info-tabs/info-tabs';

@Component({
  selector: 'page-about',
  templateUrl: 'info.html'
})
export class InfoPage {

  infoRoot = InfoTabsPage;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter(){

  }

}
