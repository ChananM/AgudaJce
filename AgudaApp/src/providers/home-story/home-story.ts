import { HomeStory } from './../../models/homeStory.model';
import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';

@Injectable()
export class HomeStoryProvider {

  posts: HomeStory[] = [];

  constructor(public dbProvider: DatabaseProvider) {
    dbProvider.getHomeStories().subscribe(stories => {
      this.posts = stories;
      console.log(this.posts);
    })
  }

  addStory(story: HomeStory){
    return this.dbProvider.addHomeStory(story);
  }

  editStory(story: HomeStory){
    return this.dbProvider.updateHomeStory(story);
  }

  deleteStory(story: HomeStory){
    return this.dbProvider.deleteHomeStory(story);
  }
}
