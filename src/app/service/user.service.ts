import { Injectable } from '@angular/core';
import {SITE_HOST_URL} from './config';
import {Http} from "@angular/http";

@Injectable()
export class UserService {
  public isLogin= false;
  public userName= '';
  public userInfo: any;

  public url = `${SITE_HOST_URL}user`;
  constructor( private _http: Http) { }

  getUser(){
    return this._http.get(this.url)
  }
}
