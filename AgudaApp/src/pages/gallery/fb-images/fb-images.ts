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

  headline: string 
  content: string 
  imageUrl: Array<string>

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.headline = navParams.get('headline')
    this.content = navParams.get('content')
    this.imageUrl = navParams.get('imageUrl')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FbImagesPage');
  }

  callImag() {
    alert("click");
    
  }

}
