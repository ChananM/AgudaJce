import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminPanelPage } from '../admin-panel/admin-panel';

@IonicPage({
  name: 'aguda-admin',
  segment: 'adminpanel',
})
@Component({
  selector: 'page-admin-login',
  templateUrl: 'admin-login.html',
})
export class AdminLoginPage {

  username:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  login() {
    console.log('verify name and password....');
    this.navCtrl.setRoot(AdminPanelPage, {isConnected: true} );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminLoginPage');
  }

}
