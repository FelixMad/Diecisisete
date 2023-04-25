import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { RespAemet } from './aemet.interface';

@Injectable({
  providedIn: 'root'
})

export class AemetService {

  private serviceUrl:string = 'https://opendata.aemet.es/opendata/api';
  private apiKey:string = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmZWxpeC5nYXJyaWRvQGdtYWlsLmNvbSIsImp0aSI6ImY4ZjNjZGMwLTA1ZjctNGIwNy05Yjc1LTc2NmQwYzhhY2NlYiIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjgxOTcxNzA5LCJ1c2VySWQiOiJmOGYzY2RjMC0wNWY3LTRiMDctOWI3NS03NjZkMGM4YWNjZWIiLCJyb2xlIjoiIn0.zK6HihK7N6vm7Qy1_avNhuRAQ3fLKGzCoHwde-qRd8E';

  constructor( private http:HttpClient ) { }


  public async getPredicionManana(ccaa:string):Promise<void>{

    const endpoint:string = `/prediccion/ccaa/manana/${ccaa}`;

    const params = new HttpParams()
      .set('api_key', this.apiKey )

    this.http.get<RespAemet>(`${this.serviceUrl}${endpoint}`, { params })
      .subscribe(resp => {
        console.log(resp.metadatos);
      })
  }

  public async getTodasLasEstaciones():Promise<void>{

    const endpoint:string = '/valores/climatologicos/inventarioestaciones/todasestaciones/';

    const params = new HttpParams()
      .set('api_key', this.apiKey )

    this.http.get<RespAemet>(`${this.serviceUrl}${endpoint}`, { params })
      .subscribe(resp => {
        console.log(resp.metadatos);
      })
  }

}
