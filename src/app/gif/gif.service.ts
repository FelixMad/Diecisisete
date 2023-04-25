import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GIFInterface } from './gif.interface';

@Injectable({
  providedIn: 'root'
})

export class GifService {

  private serviceUrl:string = 'https://api.giphy.com';
  private apiKey:string = 'eYOwSV1JsipX7FtIcsyyDmEM3ZQWP1dv';

  constructor( private http:HttpClient ) { }

  public async search(search:string):Promise<void>{

    const endpoint:string = '/v1/gifs/search';

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit','25')
      .set('q', search)

    this.http.get<GIFInterface>(`${this.serviceUrl}${endpoint}`, { params })
      .subscribe(resp => {
        console.log(resp.data[0].images.downsized.url )
      })
  }
}
