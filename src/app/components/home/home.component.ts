import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../service/youtube.service';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  
  videos:any[] = [];
  videoSeleccionado:any=null;
  constructor(public _ys: YoutubeService) {
    this._ys.getVideos()
      .subscribe(data => {
        //console.log(data);
        this.videos =  data ;
      });
  }


  ngOnInit() {
  }

  cargarMas(){
    this._ys.getVideos()
    .subscribe(data => {
      //console.log(data);
      this.videos = this.videos.push.apply(this.videos, data) ;
    });
  }

  cerrarModal(){
    this.videoSeleccionado=null;
    $('.modal').modal('hide');
  }

  verVideo(video){
    this.videoSeleccionado = video;
    $('.modal').modal();

  }

}
