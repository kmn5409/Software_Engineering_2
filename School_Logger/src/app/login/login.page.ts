import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'


interface User {
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private authservice : AuthService) { }

  user: User = {
    email: 'rahel@email.com',
    password: 'password'
  }


  login(){
    this.authservice.login(this.user.email, this.user.password);
  }

}
