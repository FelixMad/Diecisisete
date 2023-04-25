import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//import { SpotifyService } from './spotify/spotify.service';
//import { AemetService } from './aemet/aemet.service';
//import { GifService } from './gif/gif.service';
//import { EmtMadridService} from './emtMadrid/emt-madrid.service';
import { ChatGptService } from './chatGpt/chat-gpt.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    //SpotifyService,
    //AemetService,
    //GifService,
    //EmtMadridService,
    ChatGptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
