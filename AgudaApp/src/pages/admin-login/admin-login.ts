import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController, ToastController } from 'ionic-angular';
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
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {
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
        let alert = this.alertCtrl.create({
          title: 'Login Failed',
          message: e.message,
          buttons: ['OK']
        });
        alert.present();
      });
    }
  }

  forgotPassword(){
    let alert = this.alertCtrl.create({
      cssClass: 'alertClass',
      title: 'Password Recovery',
      subTitle: 'Enter your Email address',
      inputs: [
        {
          name: 'emailAddress',
          type: 'email',
          placeholder: 'Email',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: data => {
            console.log(data.emailAddress);
            let toastOpt = {
              message: '',
              duration: 3000,
              cssClass: 'toastClass',
              position: 'middle'
            };
            this.afAuth.auth.sendPasswordResetEmail(data.emailAddress)
              .then(() => {
                toastOpt.message = 'Mail with steps about password recovery was sent to you';
              })
              .catch(err => {
                toastOpt.message = err.message;
              });
            this.toastCtrl.create(toastOpt).present();
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminLoginPage');
  }

}
