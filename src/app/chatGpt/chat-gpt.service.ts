import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Models, Chat, Completion, Image } from './chat-gpt.interface';

/*
https://platform.openai.com/docs/api-reference
*/

const urlService:string = "https://api.openai.com/v1";
const secretKey:string = "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";
const organization:string = "org-xAxxS6szoiicj16ZdkkgpGPc";

const headers:HttpHeaders = new HttpHeaders()
  .set('Authorization', `Bearer ${secretKey}`)
  .set('OpenAI-Organization', `${organization}`)

const formData = new FormData();

@Injectable({
  providedIn: 'root'
})

export class ChatGptService {
  constructor( private http:HttpClient ) { }

  public getListModels():void{
    const endPoint:string = "/models";

    headers.set('Content-Type', 'application/json');

    this.http.get<Models>( `${urlService}${endPoint}`,{ headers })
      .subscribe( resp => {
        console.log(resp.data )
      })
  }

  public getRetrieveModels(model:string):void{
    const endPoint:string = "/models/";

    headers.set('Content-Type', 'application/json');

    this.http.get<any>( `${urlService}${endPoint}${model}`,{headers})
      .subscribe( resp => {
        console.log(resp)
      })
  }

  public postChat( contest:string, model:string):void{
    const endPoint:string = "/chat/completions";

    headers.set('Content-Type', 'application/json');

    const body = {
      "model": model,
      "messages": [
        {
          "role": "user",
          "content": contest
        },
      ]
    }

    this.http.post<Chat>( `${urlService}${endPoint}`, body , {headers})
      .subscribe( resp => {
        console.log(resp.choices[0])
      })
  }

  public createCompletion( prompt:string, model:string):void{
    const endPoint:string = "/completions";

    headers.set('Content-Type', 'application/json');

    const body = {
      "model": model,
      "prompt": prompt,
      "max_tokens": 250,
      "temperature": 0.7
    }

    this.http.post<Completion>( `${urlService}${endPoint}`, body , {headers})
      .subscribe( resp => {
        console.log(resp.choices[0].text)
      })
  }

  public createImage(prompt:string):void{
    const endPoint:string = "/images/generations";

    headers.set('Content-Type', 'application/json');
  
    const body = {
      "n": 1,
      "prompt": prompt,
      "size": "1024x1024"
    }

    this.http.post<Image>( `${urlService}${endPoint}`, body , {headers})
      .subscribe( resp => {
        console.log( resp.data[0].url )
      })
  }

  public editImage(prompt:string):void{
    const endPoint:string = "/images/edits";

    headers.set('Content-Type', 'multipart/form-data');

    fetch('assets/picture.png')
    .then(response => response.blob())
    .then(blob => {
      formData.append("image", blob, "picture.png");
      formData.append("mask", blob, "picture.png");
      formData.append("prompt", `${prompt}`);
      formData.append("n", "2");
      formData.append("size", "1024x1024");
      formData.append("response_format", "url");

      this.http.post<any>( `${urlService}${endPoint}`, formData , {headers})
      .subscribe( resp => {
        console.log( resp ) 
      })

    });
  }

  public imageVariations(imagen:string):void{
    const endPoint:string = "/images/variations";

    headers.set('Content-Type', 'multipart/form-data');

    fetch(imagen)
      .then(response => response.blob())
      .then(blob => {
        formData.append("image", blob, "picture.png");
        formData.append("n", "1");
        formData.append("size", "1024x1024");
        formData.append("response_format", "url");

        this.http.post<any>( `${urlService}${endPoint}`, formData , {headers})
          .subscribe( resp => {
            console.log( resp.data[0].url )
          })
      });
  }

  public listFiles():void{
    const endPoint:string = "/files";
  
    this.http.get<any>( `${urlService}${endPoint}`, {headers})
      .subscribe( resp => {
        console.log( resp  )
      })
  }

  public deleteFile(fileId:string):void{
    const endPoint:string = "/files/";
  
    this.http.delete<any>( `${urlService}${endPoint}${fileId}`, {headers})
      .subscribe( resp => {
        console.log( resp  )
      })
  }

  public uploadFile( file:string ):void{
    const endPoint:string = "/files";

    headers.set('Content-Type', 'multipart/form-data');

    fetch(file)
      .then(response => response.blob())
      .then(blob => {
        formData.append('purpose', 'fine-tune');
        formData.append('file', blob, '/assets/data.jsonl');

        this.http.post<any>( `${urlService}${endPoint}`, formData , {headers})
          .subscribe( resp => {
            console.log(resp)
          })
      });
  }

  public retrieveFile( file:string ):void{
    const endPoint:string = "/files/";

    this.http.get<any>( `${urlService}${endPoint}${file}`, {headers})
    .subscribe( resp => {
      console.log(resp)
    })
  }

  public retrieveFileContent( file:string ):void{
    const endPoint:string = `/files/${file}/content`;

    this.http.get<any>( `${urlService}${endPoint}`, {headers})
    .subscribe( resp => {
      console.log(resp)
    })
  }

  public createTranscription( file:string ):void{
    const endPoint:string = "/audio/transcriptions";

    headers.set('Content-Type', 'multipart/form-data');

    fetch(file)
      .then(response => response.blob())
      .then(blob => {
        formData.append('file', blob, '/assets/discurso.mp3');
        formData.append('model', 'whisper-1');
        formData.append('response_format', 'json');
        formData.append('temperature', '0'); 
        formData.append('language', 'en'); 
        formData.append('transcription', 'srt'); 

        this.http.post<any>( `${urlService}${endPoint}`, formData , {headers})
          .subscribe( resp => {
            console.log(resp.text)
          })
      });
  }

  public createTranslation( file:string ):void{
    const endPoint:string = "/audio/translations";

    headers.set('Content-Type', 'multipart/form-data');

    fetch(file)
      .then(response => response.blob())
      .then(blob => {
        formData.append('file', blob, '/assets/audio.m4a');
        formData.append('model', 'whisper-1');
        formData.append('response_format', 'json');
        formData.append('temperature', '0'); 
        formData.append('language', 'en'); 
        formData.append('transcription', 'srt'); 

        this.http.post<any>( `${urlService}${endPoint}`, formData , {headers})
          .subscribe( resp => {
            console.log(resp.text)
          })
      });
  }

  public createFineTune():void{
    const endPoint:string = "/fine-tunes";

    let body = new FormData();
    body.append('training_file', 'fine-tune');

    this.http.post<any>( `${urlService}${endPoint}`,body ,{headers})
      .subscribe( resp => {
        console.log(resp)
      })
  }

}
