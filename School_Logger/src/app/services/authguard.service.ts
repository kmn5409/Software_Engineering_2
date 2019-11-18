import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  authenticated: boolean; 
  userId: string; 
  constructor(private router: Router, private auth: AuthService, private Auth: AngularFireAuth) {
    this.Auth.authState.subscribe(user => {
      if(user){
        this.authenticated = true
        this.userId = user.uid
        console.log("hey im logged in");
      }else{
        this.authenticated = false
        this.userId = null
        console.log("hey im not logged in");
      }
    })
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.role;
   // console.log("authgaurd",  localStorage.getItem("role"));
    let authInfo = {
      authenticated: this.authenticated,
      role: localStorage.getItem("role")
    };

    if (!authInfo.authenticated) {
      this.router.navigate(["login"]);
      return false;
    }

    if(authInfo.role == expectedRole){
       return true;
    }else  {
       this.router.navigate(["login"]);
      return false;
    }

    return true;
  }
}
