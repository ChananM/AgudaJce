import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

@Component({
  selector: 'page-image-slides',
  templateUrl: 'image-slides.html',
})
export class ImageSlidesPage {

  images: string[]
  index: number

  tabBarElement: any;

  @ViewChild('mySlider') slider: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.index = this.navParams.get('index')
    this.images = this.navParams.get('imageUrl')
    console.log(this.images);
    setTimeout(() => {
      this.slider.slideTo(this.index, 0);
    }, 60)
  }

  close(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageSlidesPage');
  }

  ionViewWillEnter(){
    document.getElementsByClassName('tabbar').item(0).classList.add('tabbar_hidden')
  }

  ionViewWillLeave(){
    document.getElementsByClassName('tabbar').item(0).classList.remove('tabbar_hidden')
  }
}
