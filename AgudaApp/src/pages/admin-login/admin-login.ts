import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { AdminPanelPage } from '../admin-panel/admin-panel';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage({
  name: 'aguda-admin',
  segment: 'adminpanel',
})
@Component({
  selector: 'page-admin-login',
  templateUrl: 'admin-login.html',
})
export class AdminLoginPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              private loadingCtrl: LoadingController) {
  }

  async login() {
    let loader:Loading;
    try {
      console.log('verify name and password....');
      loader = this.loadingCtrl.create();
      loader.present();

      const res = await this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
      console.log(res);

      loader.dismiss().then(() => {
        console.log('uid: ' + res.uid);
        this.navCtrl.setRoot(AdminPanelPage);
      });

    } catch (e) {
      console.error(e);
      loader.dismiss().then(() => {
        let load2 = this.loadingCtrl.create({
          content: e.message,
          spinner: 'text only',
          duration: 3000,
          cssClass: 'customLoad'
        });
        load2.present();
      })
    }
  }

  forgotPassword(){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminLoginPage');
  }

}
