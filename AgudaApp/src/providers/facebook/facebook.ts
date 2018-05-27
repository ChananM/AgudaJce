import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Albums, Photo, Photos } from '../../models/interfaces';
import { DatabaseProvider } from '../database/database';

@Injectable()
export class FacebookProvider {

  token: string;

  constructor(public http: HttpClient, public db: DatabaseProvider) {
  }

  async getAllAlbums(): Promise<Albums> {
    let counter = 0;
    if (this.token === undefined){
      this.token = await this.db.getFBAccessToken();
    }
    return new Promise<Albums>((resolve, reject) => {
      this.http.get('https://graph.facebook.com/aguda.jce/albums?limit=200&fields=name,count,cover_photo,created_time&access_token=' + this.token)
        .subscribe(albums => {
          let a = albums as Albums;
          for (let i = 0; i < a.data.length; i++) {
            this.http.get('https://graph.facebook.com/' + a.data[i].cover_photo.id + '?fields=images&access_token=' + this.token)
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

  getPhotosByAlbumId(id: string): Promise<Photos> {
    return new Promise<Photos>((resolve, reject) =>{
      this.http.get('https://graph.facebook.com/' + id + '/photos?limit=24&fields=images&access_token=' + this.token)
        .subscribe( async photos => {
          let p = photos as Photos;
          resolve(p);
          }, err => {
            reject(err)
          })
    })
  }

  getPhotos(query: string): Promise<Photos> {
    return new Promise<Photos>((resolve, reject) => {
      this.http.get(query).subscribe(photos => { 
          let p = photos as Photos
          resolve(p);
          }, err => {
            reject(err)
          })
    })
  }
}
