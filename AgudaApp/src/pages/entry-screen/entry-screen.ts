import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-entry-screen',
  templateUrl: 'entry-screen.html',
})
export class EntryScreenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    setTimeout(function() {
      navCtrl.setRoot(TabsPage);
    }, 5000);   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntryScreenPage');
  }

}
