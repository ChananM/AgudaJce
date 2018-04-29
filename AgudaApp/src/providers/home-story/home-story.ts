import { HomeStory } from './../../models/homeStory.model';
import { Injectable } from '@angular/core';

/*
  Generated class for the HomeStoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeStoryProvider {

  posts: any = [];

  constructor() {
  }

  load(){
    this.posts = [
      new HomeStory("http://www.nuclearblast.de/static/articles/260/260672.jpg/1000x1000.jpg", "On Her Journey To The Sun", "A music album by Rikard Sjöblom's Gungfly"),
      new HomeStory("http://evilinkrecords.com/wp-content/uploads/2016/07/StrangersCover.jpg", "Stranger Heads Prevail", "A music album by Thank You Scientist"),
      new HomeStory("https://static.wixstatic.com/media/d6751f_4abd982a7f374044a8c7c249d146427c~mv2.jpg", "Blackbox", "A music album by Major Parkinson")
    ];
  }

}
