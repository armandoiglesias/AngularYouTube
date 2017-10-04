import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'video'
})
export class VideoPipe implements PipeTransform {

  constructor(private ds:DomSanitizer){

  }

  transform(value: any, args?: any): any {
    let url = "https://www.youtube.com/embed/";
    return this.ds.bypassSecurityTrustResourceUrl(url + value );
  }

}
