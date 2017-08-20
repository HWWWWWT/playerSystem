import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {SITE_HOST_URL} from './config';

@Injectable()
export class LoginService {
  public url = `${SITE_HOST_URL}login`;
  constructor(private _http: Http) { }

  login(data: Object){
    const body = data;
    const headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this._http.post(this.url, body , headers);
  }
}
