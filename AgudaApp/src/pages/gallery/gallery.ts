import { Albums, Photo } from './../../models/interfaces';
import { Component } from '@angular/core';
import { NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { FbImagesPage } from './fb-images/fb-images';
import { FacebookProvider } from '../../providers/facebook/facebook';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  public allowed: boolean = false; 
  public albums: Albums;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              public fbProv: FacebookProvider,
              public loadingCtrl: LoadingController) {
          
                let loader = this.loadingCtrl.create();
                loader.present();

                fbProv.getAllAlbums().then(res =>{
                  this.albums = res;
                  for(let i = 0; i < this.albums.data.length; i++) {
                    if(this.albums.data[i].name == "Timeline Photos" || 
                      this.albums.data[i].name == "Mobile Uploads" ||
                      this.albums.data[i].name == "Cover Photos" ||
                      this.albums.data[i].name == "Profile Pictures") {
                        this.albums.data.splice(i, 1)
                        i--;
                    }
                  }
                  console.log(this.albums)
                  this.allowed = true;
                  loader.dismiss()
                }).catch(err => {
                  console.log(err);
                  loader.dismiss()
                })
  }

  ionViewDidEnter() {
    this.doRefresh();
  }

  doRefresh() {
    console.log("galery refresh");
  }

  callAlbum(album) {
      this.navCtrl.push(FbImagesPage, {album: album});
  }
}
