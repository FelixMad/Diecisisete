import { Component, OnInit } from '@angular/core';
//import { AemetService } from './aemet/aemet.service';
//import { GifService } from './gif/gif.service';
//import { EmtMadridService } from './emtMadrid/emt-madrid.service';
//import { SpotifyService } from './spotify/spotify.service';
import { ChatGptService } from './chatGpt/chat-gpt.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor( 
    //private gifService:GifService, 
    //private aemetService:AemetService, 
    //private emtMadridService:EmtMadridService,
    //private spotifyService:SpotifyService
    private chatGptService:ChatGptService,
    private http:HttpClient,
    private sanitizer: DomSanitizer
  ) { }


  ngOnInit() {

    const text:string = "Because gpt-3.5-turbo performs at a similar capability to text-davinci-003 but at 10% the price per token, we recommend gpt-3.5-turbo for most use cases. For many developers, the transition is as simple as rewriting and retesting a prompt. For example, if you translated English to French with the following completions prompt:";
    const prompt:string = `Traduceme el siguiente texto del ingles al español: ${text}`;

    //this.chatGptService.createTranslation('/assets/audio.m4a');
    //this.chatGptService.createTranscription('/assets/discurso.mp3');

    //this.chatGptService.uploadFile('/assets/data.jsonl');
    //this.chatGptService.deleteFile("file-9hvKDiJDnhLVKHOzCZtsV215");
    //this.chatGptService.listFiles();
    //this.chatGptService.retrieveFile("file-tgUaZDjcwrWEAzNcRBlHcUrd");
    //.chatGptService.retrieveFileContent( "file-tgUaZDjcwrWEAzNcRBlHcUrd");

    //this.chatGptService.imageVariations('/assets/picture.png');
    //this.chatGptService.editImage("dfg");

    //this.getImageData();
    //this.chatGptService.createCompletion("Hazme una tabla de colores para un cuadro que represente una mañana bucolica de otoño" ,"text-davinci-003");

    //this.chatGptService.createImage("Hazme una paleta de colores para una imagen veraniega");
    //this.chatGptService.postChat("¿Quien es el presidente de España?","gpt-3.5-turbo");
    //this.chatGptService.getListModels();
    //this.chatGptService.getRetrieveModels("babbage");
    
    //this.spotifyService.getRecommendedTracks();
    //this.spotifyService.getToken();
    //this.spotifyService.getToken();
    //this.spotifyService.search("Queen");
    //this.spotifyService.getTracks();

    //this.emtMadridService.getBiciPark();
    //this.aemetService.getTodasLasEstaciones();
    //this.aemetService.getPredicionManana("mad");
    //this.gifService.search("Queen");

  }
}
