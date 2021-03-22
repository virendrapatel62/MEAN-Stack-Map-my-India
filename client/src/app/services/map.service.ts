import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MapTokenResponse } from '../models/map-token';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private client_id = '_your_client_id';
  private client_secret = '_your_client_secret';
  private tokenUrl = `/api/security/oauth/token?grant_type=client_credentials&client_id=${this.client_id}&client_secret=${this.client_secret}`;

  private addressUrl = '/api/places/geocode?itemCount=5&address=';

  private tokenResponse: MapTokenResponse;

  constructor(private http: HttpClient) {
    this.generateToken();
  }

  generateToken() {
    console.log('2. token Generating.....');
    this.http.post(this.tokenUrl, {}).subscribe((tokenData) => {
      this.tokenResponse = <MapTokenResponse>tokenData;
      console.log({ tokenResponse: this.tokenResponse });
    });
  }

  getAddresses(address: String) {
    console.log('searching Addresses for ' + address);
    return this.http
      .get(this.addressUrl + address, {
        headers: {
          Authorization:
            this.tokenResponse.token_type +
            ' ' +
            this.tokenResponse.access_token,
        },
      })
      .pipe(map((results: any) => results.copResults));
  }
}
