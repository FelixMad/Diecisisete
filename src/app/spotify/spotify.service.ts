import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private token = 'BQA4a7e1dUSxy-PdXFUmgCzV6EwCAM7vZrB8GtGFs6UWTYU4DYVwldq01hnlTOavKZ2I4HQ83j9WJSwemHAURaiNp1T5qmijEj2TkA3Im3vlhmGz6Dk5y3AJolB9VgOc7DrL0XSLn_Y2H4w5aFT0kVM7RmypOlbUdJhLR0x3_h2-PV8ypRkkT3YAQIn_jagTtzc0qFjtK9xUPeoQoxOHTc558p_AVWsONw1Q2p7TEpIEp5CzMISaLTNOb_otm0jOQzIFttFI9pwY4ANJyjPCU5Cp-Sqb6mUrRqbzTrew0ADtkEEHu7ZSFvKteBXk9p3Q-j9AOvey2gz3KFYizIJ4-1Xz';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  };

  constructor(private http: HttpClient) { }

  private async fetchWebApi(endpoint: string, method: string, body?: any): Promise<any> {
    const res = await this.http.request(method, `https://api.spotify.com/${endpoint}`, {
      body: JSON.stringify(body),
      headers: this.httpOptions.headers
    }).toPromise();
    return res;
  }

  private async getRecommendations(): Promise<any[]> {
    const topTracksIds = [
      '2bPGTMB5sFfFYQ2YvSmup0','2RY8lhiT0Sg4D5PzcKcQYo','2aqarSktx1bU8WrZE9lW1X','0AZQsK0Z94gesutws0hORk','0Ja4hLKiUSw01E01pJ1yGr'
    ];
    const res = await this.fetchWebApi(`v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(',')}`, 'GET');
    return res['tracks'];
  }

  public async getRecommendedTracks(): Promise<string[]> {
    const recommendedTracks = await this.getRecommendations();
    return recommendedTracks.map(({ name, artists }) => `${name} by ${artists.map(artist => artist.name).join(', ')}`);
  }
}
