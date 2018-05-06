import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { HomeStory } from '../../../models/homeStory.model';

@Component({
  selector: 'page-story-article',
  templateUrl: 'story-article.html',
})
export class StoryArticlePage {

  story: HomeStory;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {
    this.story = navParams.get('story');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryArticlePage');
  }

}
