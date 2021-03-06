import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService, private route: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log(this.userService.isLogin);
        if(this.userService.isLogin) {
            return true;
        }
        this.route.navigate(['/login'],{queryParams:{returnUrl: state.url}});
        return false;
    }
}
