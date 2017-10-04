import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//
import { YoutubeService } from './service/youtube.service';
import { VideoPipe } from './pipes/video.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    VideoPipe
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [
    YoutubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
