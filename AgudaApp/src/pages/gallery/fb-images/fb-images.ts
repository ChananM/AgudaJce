import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';

@Component({
  selector: 'page-fb-images',
  templateUrl: 'fb-images.html',
})
export class FbImagesPage {

  headline: string  
  photos: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.headline = navParams.get('headline')
    this.photos = navParams.get('imageUrls')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FbImagesPage');
  }

  callImage(index) {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.photos,
      initialSlide: index,
      closeIcon: "close"
    });
    modal.present();
  }

}
