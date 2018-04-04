import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-entry-screen',
  templateUrl: 'entry-screen.html',
})
export class EntryScreenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    setTimeout(function() {
      navCtrl.setRoot(TabsPage);
    }, 5000);
  }

  ionViewDidLoad() {
    if(this.platform.is('core')){ 
      //if it's from computer web browser, not a mobile web/native.
      document.getElementById('enter').setAttribute('width', '40%');
      document.getElementById('enter').setAttribute('height', '65%');
    }
    else{
      document.getElementById('enter').setAttribute('width', '100%');
      document.getElementById('enter').setAttribute('height', '100%');
    }
  }

}
