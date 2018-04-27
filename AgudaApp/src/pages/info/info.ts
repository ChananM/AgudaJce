import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { InfoTabsPage } from '../info-tabs/info-tabs';

@Component({
  selector: 'page-about',
  templateUrl: 'info.html'
})
export class InfoPage {

  tabName = 'מידע';
  refresh_id = 'infoRef';

  infoRoot = InfoTabsPage;

  constructor(public navCtrl: NavController, private events: Events) {

  }

  ionViewDidEnter(){
    this.events.publish('tab', this.tabName, this.refresh_id);
    this.doRefresh();
  }

  doRefresh(){
    console.log("info refresh");
  }
}
