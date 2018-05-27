import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController, Content } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';
import { Photo, Photos } from '../../../models/interfaces';
import { FacebookProvider } from '../../../providers/facebook/facebook';

@Component({
  selector: 'page-fb-images',
  templateUrl: 'fb-images.html',
})

export class FbImagesPage {

  @ViewChild(Content) 
    content: Content;

  allowed: boolean = false; 
  imageUrls: Photos
  photos: any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public modalCtrl: ModalController,
              public fbProv: FacebookProvider,
              public loadingCtrl: LoadingController) {

                let album = navParams.get('album');
                let loader = this.loadingCtrl.create();
                loader.present();
                this.fbProv.getPhotosByAlbumId(album.id).then(res =>{
                  this.imageUrls = res;
                  this.getPhotosUrl(this.imageUrls.data, this.photos);
                  this.allowed = true;
                  loader.dismiss()
                  console.log(this.photos); 
                }).catch(err => {
                  console.log(err);
                  loader.dismiss()
                })   
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

  getPart(goTo: string) {
    let loader = this.loadingCtrl.create();
    loader.present();
    this.fbProv.getPhotos(goTo).then(res => {
      this.imageUrls = res;
      this.photos = this.getPhotosUrl(this.imageUrls.data, []);
      loader.dismiss();
      this.content.scrollToTop();
    }).catch(err => {
      console.log(err);
      loader.dismiss()
    })
  }

  getPhotosUrl(photos: Photo[], urls: any[]): any[] {
    for(let i = 0; i < photos.length; i++) {
      urls.push({url: photos[i].images[0].source});
    }
    return urls;
  }

}
