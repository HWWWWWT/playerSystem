import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from './user.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor( private route: Router, private userService: UserService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.userService.isLogin) {
      return true;
    }else{
      alert('Please Login')
      this.route.navigateByUrl('/login');
      return false;
    }

  }
}
