import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {SITE_HOST_URL} from './config';

@Injectable()
export class RegisterService {
  public url = `${SITE_HOST_URL}user/add`;
  constructor(private _http: Http) { }

  addUser(data: Object) {
    const body = data;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.post(this.url, body, headers);
  }

}
