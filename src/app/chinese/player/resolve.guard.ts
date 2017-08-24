import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AddplayService} from "../../service/addplay.service";

@Injectable()
export class ResolveGuard implements Resolve<any> {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }
  detail: {};
  constructor(private _route: Router, private _playSer: AddplayService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this._playSer.getPlayById(route.params['id']).map(
      res => {
        if(res){
          console.log(res)
          return res;
        }else {
          this._route.navigate(['/workspace/chinese/player'])
        }
      }
    )
  }
}
