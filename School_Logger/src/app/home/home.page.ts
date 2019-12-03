import { Component , OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private auth: AuthService, private router: Router, private afAuth: AngularFireAuth, private db: AngularFirestore) {}

  signout() {
    this.auth.signout();
  }


  login() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    // if (localStorage.getItem('auth') == 'true') {
    //   if (localStorage.getItem('role') == 'teacher') {
    //     this.router.navigate(['/teacher']);

    //   } else {
    //     this.router.navigate(['/parent']);

    //   }
    //   return;
    // }

    this.afAuth.authState.subscribe( user => {
        if (user) {
          const result = this.db.collection('users', ref => ref.where('userID', '==', user.uid)).valueChanges().subscribe(
          (results: any) => {
          for (const r of results) {
            if (r.role === 'teacher') {
            this.router.navigate(['/teacher']);
            } else if (r.role === 'parent') {
            this.router.navigate(['/parent']);
          }
        }
            });
           }
        });

      }
}
