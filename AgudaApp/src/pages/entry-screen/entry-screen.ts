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
      navCtrl.setRoot(TabsPage, {}, {animate: true, direction: 'forward', duration: 1250});
    }, 3000);
  }

  ionViewDidLoad() {
    if(this.platform.is('core')){ 
      //if it's from computer web browser, not a mobile web/native.
      document.getElementById('enter').setAttribute('width', '25%');
      document.getElementById('overlay').style.left = "50%";
    }
    else{
      document.getElementById('enter').setAttribute('width', '100%');
      document.getElementById('overlay').style.left = "45%";
    }
  }

}
