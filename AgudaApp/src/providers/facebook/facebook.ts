import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Albums, Photo, Photos } from '../../models/interfaces';

@Injectable()
export class FacebookProvider {

  access = "EAACEdEose0cBAGlYOHY8ZBrS27XZCoLAqF5Cayov64XKogLCx52Kdju5fQnJJtXjDwsDJeNZAP7TgSGwjVRUTf4weiYitXSJBXcVlUMRqTZAk7QiO28xVnG4EkUt60BJpWFnYWxgZAgBw1ONtSVoKbfQZAIff8o5GIZCIZBSOTQj7c1qYxfrMpRTm9ZB88X9lIdsZD";

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

  getPhotosFromAlbumId(id: string): Promise<Photos> {
    return new Promise<Photos>((resolve, reject) =>{
      this.http.get('https://graph.facebook.com/' + id + '/photos?limit=24&fields=images&access_token=' + this.access)
        .subscribe( async photos => {
          let p = photos as Photos;
          resolve(p);
          }, err => {
            reject(err)
          })
    })
  }

  getPhotos(next: string): Promise<Photos> {
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
