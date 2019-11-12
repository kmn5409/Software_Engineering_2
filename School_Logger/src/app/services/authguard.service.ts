import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private router: Router, private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.role;
    //let currentuser : any = this.auth.currentUser;
    //console.log("current user : ", currentuser.role);

    let authInfo = {
      authenticated: true,
      role: 'parent'
    };

    if (!authInfo.authenticated) {
      this.router.navigate(["login"]);
      return false;
    }

    if(authInfo.role == expectedRole){
     // return true;
    }else  {
      //this.router.navigate(["login"]);
     //return false;
    }

    return true;
  }
}
