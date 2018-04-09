import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'panel',
})
@Component({
  selector: 'page-admin-panel',
  templateUrl: 'admin-panel.html',
})
export class AdminPanelPage {

  isConnected: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidEnter(){
    console.log(this.isConnected);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPanelPage');
    if(!this.navParams.get('isConnected')){
      console.log('not connected properly');
      this.navCtrl.setRoot('aguda-admin');
    }else{
      this.isConnected = true;
    }
  }
}
