import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmtMadridService {

  private urlService:string = "https://openapi.emtmadrid.es/v1/";

  constructor( private http:HttpClient) { }

  public async getBiciPark():Promise<void>{
    const endPoint:string = "transport/bicipark/stations/";
    this.http.get<any>(`${this.urlService}${endPoint}`)
      .subscribe(resp => {
        console.log(resp);
      })
  }

}
