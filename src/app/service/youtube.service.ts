import { Injectable } from '@angular/core';
import { Http, URLSearchParams} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class YoutubeService {

  apiKey:string="AIzaSyDE807WHrPnV95oRrQ8iohN0YyQX0XChWA";
  playLs:string="PLAROrg3NQn7dGvRHDanboi4-mZ0AnUaxj";
  youtubeUrl:string = "https://www.googleapis.com/youtube/v3";
  nextPageToken:string = "";

  constructor(public http:Http) { }

  hasNext(){
    console.log(this.nextPageToken);
    if(this.nextPageToken == ""  || this.nextPageToken == undefined){
      return false;
    }
    return true;
  }

  getVideos(){
    let url=  `${ this.youtubeUrl}/playlistItems`;

    let params = new URLSearchParams();
    params.set('part', 'snippet');
    params.set('maxResults', '10');
    params.set('playlistId', this.playLs);
    params.set('key', this.apiKey);

    if(this.nextPageToken != ""  || this.nextPageToken !== undefined){
      params.set('pageToken', this.nextPageToken);
    }
    
    return this.http.get(url, {search: params})
      .map( res => {
        //console.log(res.json());
        this.nextPageToken = res.json().nextPageToken;

        let videos:any[]=[];
        for (let video of res.json().items) {
          let v = video.snippet;
          videos.push(v);
        }
        return videos;
      });

  }

}
