import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Albums, Photo, Photos } from '../../models/interfaces';

@Injectable()
export class FacebookProvider {

  access = "EAACEdEose0cBAHxyZBHDYB6ZCoVer7WzzJVNWGPgBQc7rIqPeHo5A8SA9OUqMoZBUGjpH6YYj0W4XESXKjqPXaU3ZChwu5MeQPZARoPb8Dt1Orh4fZADXm3INJZBm56aZCt6FmQ0F1LPG6uRHPcZCQEI4EZBMusb4ilrPQi2uHeT7BZBUCbdkc7sIHifPcc7frvnRrAvLzdNVdJFAZDZD";

  constructor(public http: HttpClient) {
  }

  getAllAlbums(): Promise<Albums> {
    let counter = 0;
    return new Promise<Albums>((resolve, reject) => {
      this.http.get('https://graph.facebook.com/aguda.jce/albums?limit=200&fields=name,count,cover_photo,created_time&access_token=' + this.access)
        .subscribe(albums => {
          let a = albums as Albums;
          for (let i = 0; i < a.data.length; i++) {
            this.http.get('https://graph.facebook.com/' + a.data[i].cover_photo.id + '?fields=images&access_token=' + this.access)
              .subscribe(cover => {
                a.data[i].cover_photo = cover as Photo;
                counter++;
                if(counter == a.data.length){
                  resolve(a)
                }
              })
            }
          }, err => {
            reject(err)
          })
    })
  }

  getphotos(id: string): Promise<Photos> {
    return new Promise<Photos>((resolve, reject) =>{
      this.http.get('https://graph.facebook.com/' + id + '/photos?fields=images&access_token=' + this.access)
        .subscribe( async photos => {
          let p = photos as Photos;
          /*while(p.paging.next != null) {
            await this.getNextPhotos(p.paging.next)
              .then( res =>{
                p = res;
                for (let i = 0; i < p.data.length; i++) {
                   photo.push(p.data[i]);
                }
              }).catch(err => {
                console.log(err);
              })
          } */
          resolve(p);
          }, err => {
            reject(err)
          })
    })
  }

  getNextPhotos(next: string): Promise<Photos> {
    return new Promise<Photos>((resolve, reject) => {
      this.http.get(next)
        .subscribe(photos => { 
          let p = photos as Photos
          resolve(p);
          }, err => {
            reject(err)
          })
    })
  }
}
