import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FbImagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-fb-images',
  templateUrl: 'fb-images.html',
})
export class FbImagesPage {

  title: string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('text1')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FbImagesPage');
  }

}
