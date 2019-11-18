import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

interface User {
  firstname?: string,
  lastname?: string,
  email?: string;
  password?: string;
  role?: string;
}

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.page.html',
  styleUrls: ['./createaccount.page.scss'],
})
export class CreateaccountPage {

  user: User = {
    firstname:'',
    lastname:'',
    email: '',
    password: '',
    role: ''
  }
  constructor(private authservice : AuthService) { }

  createAccount(){
    this.authservice.createAccount(this.user.email, this.user.password,  this.user.role, this.user.firstname, this.user.lastname );
  }

}
