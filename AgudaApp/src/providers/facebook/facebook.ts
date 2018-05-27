import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Albums, Photo, Photos } from '../../models/interfaces';

@Injectable()
export class FacebookProvider {

  access = "EAACEdEose0cBAMS4s51A9NNiJNV7ZAqvUkZCkbESZCqQwNMnzR4N1aseaRNg9GYDbQUg10qCKOqckdZC0meK5bU4TLsFOJ6Y3b8qIIGUQoCZCUXYH8EYvvWlFBzkPwZBOD3d2HZBiEgJZCQCM4ZB8PVr7rA6ZAvk6lzkNhenncouET3zKZC9EIw29TDDEkOt39rHz4jSAiCvCG2FQZDZD";

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
