import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {SITE_HOST_URL} from './config';
import {Observable} from 'rxjs/Rx';
import {errorHandler} from "@angular/platform-browser/src/browser";

@Injectable()
export class AddplayService {

  public url = `${SITE_HOST_URL}player/add`;
  constructor(private _http: Http) { }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'server error');
  }
  private extractData(res: any){
    const body = res.json();
    return body.data || {};
  }
  addPlayer(data: Object) {
    const body = data;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.post(this.url, body, headers);
  }

  getPlayName() {
    return this._http.get(SITE_HOST_URL + 'player').map(this.extractData).catch(this.handleError);
  }

  getPlayById(id: string) {
    return this._http.get(SITE_HOST_URL + 'player/' + id)
      .map(this.extractData).catch(this.handleError);
  }

  delPlayer(id: string) {
      return this._http.get(SITE_HOST_URL + 'player/del/' + id)
  }
  updatePlayer(value){
    const body = value;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.post(SITE_HOST_URL+ 'player/update/', body, headers);
    // return this._http.get(SITE_HOST_URL+ 'play/update/').map(this.extractData).catch(this.handleError);
  }
}
