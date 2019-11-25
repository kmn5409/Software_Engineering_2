import { Component , OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private auth: AuthService, private router: Router) {}

  signout(){
    this.auth.signout();
  }


  login(){
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    if (localStorage.getItem('auth') == 'true') {
      if (localStorage.getItem('role') == 'teacher') {
        this.router.navigate(['/teacher']);
        
      } else {
        this.router.navigate(['/parent']);
        
      }
      return;
    }
    //this.router.navigate(['/login']);
  }


}
