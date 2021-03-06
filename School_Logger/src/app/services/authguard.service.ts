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
    //console.log(JSON.parse(localStorage.getItem('auth')));
    this.authenticated = JSON.parse(localStorage.getItem('auth'));
    this.Auth.authState.subscribe(user => {
      if (user) {
        this.authenticated = true
        localStorage.getItem('auth');
        this.userId = user.uid
        console.log("hey im logged in");
      } else {
        this.authenticated = false
        this.userId = null
        console.log("hey im not logged in");
      }
    })
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.role;

    let authInfo = {
      authenticated: this.authenticated,
      role: localStorage.getItem("role")
    };

    if (!authInfo.authenticated) {
      this.router.navigate(["login"]);
      return false;
    }

    if (authInfo.role == expectedRole) {
      return true;
    } else {
      this.router.navigate(["login"]);
      return false;
    }
  }
}
