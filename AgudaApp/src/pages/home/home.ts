import { HomeStoryProvider } from './../../providers/home-story/home-story';
import { Component } from '@angular/core';
import { NavController, Events, Platform, ModalController } from 'ionic-angular';
import { HomeStory } from '../../models/homeStory.model';
import { StoryArticlePage } from './story-article/story-article';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabName = 'ראשי';
  refresh_id = 'homeRef';
  browserSize;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public events: Events, 
              public postsService: HomeStoryProvider, 
              public platform: Platform) {

    if(this.platform.is('core')){ 
      //if it's from computer web browser, not a mobile web/native.
      this.browserSize = "desktop-card"
    }
  }

  showStory(story: HomeStory){
    let modal = this.modalCtrl.create(StoryArticlePage, {story: story});
    modal.present();
  }

  ionViewDidEnter(){
    this.events.publish('tab', this.tabName, this.refresh_id);
    this.doRefresh();
  }

  doRefresh(){
    console.log("home refresh");
  }
}
