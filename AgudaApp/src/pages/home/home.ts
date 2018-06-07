import { HomeStoryProvider } from './../../providers/home-story/home-story';
import { Component } from '@angular/core';
import { NavController, Platform, ModalController, Events } from 'ionic-angular';
import { HomeStory } from '../../models/homeStory.model';
import { StoryArticlePage } from './story-article/story-article';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NotificationProvider } from '../../providers/notification/notification';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  browserSize;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public postsService: HomeStoryProvider,
              public iab: InAppBrowser,
              public platform: Platform,
              public events: Events,
              public np: NotificationProvider) {

    if(this.platform.is('core')){ 
      //if it's from computer web browser, not a mobile web/native.
      this.browserSize = "desktop-card"
    }
    else if (this.platform.is('cordova')){
      if(np.notification != null){
        if (np.notification.body != null){
          setTimeout(() => {
            let p = postsService.posts.find(post => post.headline.valueOf() == np.notification.title.valueOf());
            this.showStory(p);
          }, 500)
        } else if (np.notification.title.includes('אירוע חדש')){
          navCtrl.parent.select(1);
          np.showNotificationAlert(np.notification);
        }
      }
      events.subscribe('notification', (data) => {
        np.showNotificationAlert(data);
      })
    }
  }

  showStory(story: HomeStory){
    let modal = this.modalCtrl.create(StoryArticlePage, {story: story});
    modal.present();
  }

  ionViewDidEnter(){
    this.doRefresh();
  }

  doRefresh(){
    console.log("home refresh");
  }
}
