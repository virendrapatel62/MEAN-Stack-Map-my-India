import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MapTokenResponse } from '../models/map-token';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private tokenUrl =
    '/api/security/oauth/token?grant_type=client_credentials&client_id=K9FcE7rTjKaqju2XuWlLrzxXYspxv4s-A9hdogM0WDmcUVwsFo0wBA==&client_secret=Lnb4Nczh7cGDCx-MmiftR99nD8YZcpUeMLGlwmXgt0PW0P_jU7UJQhVRmghgP-Rk';

  private tokenResponse: MapTokenResponse;

  constructor(private http: HttpClient) {}

  generateToken() {
    console.log('2. token Generating.....');
    this.http.post(this.tokenUrl, {}).subscribe((tokenData) => {
      this.tokenResponse = <MapTokenResponse>tokenData;
    });
  }
}
