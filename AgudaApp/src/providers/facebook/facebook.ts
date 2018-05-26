import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Albums, Photo, Photos } from '../../models/interfaces';

@Injectable()
export class FacebookProvider {

  access = "EAACEdEose0cBAK7UFnW4PbPZB4I8NXVKTnLGKqD7YAbjsvFLYZAtnxlO5K0Fpk8ZBIxaD8zS25jkxTxgVQfq91qoScNI82HU7f2Ga6QN94nCyqZBPkXJiEasbTDcUTlZBqevK2P86jnmQSM68ubYFlCiPdUO2XjaS9ylZA2lYDNTJBhX1CGo10zQrZCwBRdpYZBdWh6qixHq0wZDZD";

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
