import { Injectable } from '@angular/core';

/*
  Generated class for the HomeDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeDataProvider {

  posts: any = [];

  constructor() {
  }

  load(){
    this.posts = [
      {headline: "Headline test", content: "Content test"},
      {headline: "Headline test", content: "Content test"},
      {headline: "Headline test", content: "Content test"}
    ];
  }

}
