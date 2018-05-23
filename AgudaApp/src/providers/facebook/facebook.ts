import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Albums, Photo } from '../../models/interfaces';

@Injectable()
export class FacebookProvider {

  access = "EAACEdEose0cBAJycraDx1owSfUG20biYazq5QoZC2g2ZCNDaD5bMaPVOkRYSnB0aSPpMF51UZAXdbZCBOwZBmM1DZAcodWBEQJRofpMuwJKK6FnMrLCWz2wrhVDDnIjUjj06ID2jvAUgzpQt68A9DabIZC1UJqZCfL4UNuecdvG5yBSYbpBRjNlo35OknLisgZCYZD";

  constructor(public http: HttpClient) {

    // http.get('http://graph.facebook.com/aguda.jce/albums?limit=200&fields=name,count,cover_photo,created_time&access_token=' + this.access)
    //   .subscribe(album => {
    //     this.albums = album as Albums;
    //     for(let i=0; i<this.albums.data.length; i++){
    //       http.get('http://graph.facebook.com/' + this.albums.data[i].cover_photo.id + '?fields=images&access_token=' + this.access)
    //           .subscribe(cover => {
    //             this.albums.data[i].cover_photo = cover as Photo;
    //           })
    //     }
    //     console.log(this.albums);
    //   })
  }

  getAllAlbums(): Promise<Albums> {
    let counter = 0;
    return new Promise<Albums>((resolve, reject) => {
      this.http.get('http://graph.facebook.com/aguda.jce/albums?limit=200&fields=name,count,cover_photo,created_time&access_token=' + this.access)
        .subscribe(albums => {
          let a = albums as Albums;
          for (let i = 0; i < a.data.length; i++) {
            this.http.get('http://graph.facebook.com/' + a.data[i].cover_photo.id + '?fields=images&access_token=' + this.access)
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
}
