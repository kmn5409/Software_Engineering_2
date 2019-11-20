import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';
import { AngularFirestore , AngularFirestoreCollection,  AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable, BehaviorSubject } from 'rxjs';


interface User {
  firstname: string;
  lastname: string;
  email?: string;
  password?: string;
  role?: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: ''
  };

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore , private router: Router) { }

  public currentUser: any;
  public userStatus: string;
  public userStatusChanges: BehaviorSubject<string> = new BehaviorSubject<string>(this.userStatus);


  setUserStatus(userStatus: any): void {
    this.userStatus = userStatus;
    this.userStatusChanges.next(userStatus);
  }

  createAccount(email: string, password: string, role: string, firstname: string, lastname: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    ).then((userResponse) => {
      let user = {};
      if (role == 'teacher') {
          user = {
          firstname,
          lastname,
          id: userResponse.user.uid,
          username: userResponse.user.email,
          students: [],
          role
        };

      } else {
          user = {
          id: userResponse.user.uid,
          username: userResponse.user.email,
          children: [],
          role
        };

      }

      this.firestore.collection('users').doc(userResponse.user.uid).set(user).then(user => {
        this.currentUser = user;
        this.setUserStatus(this.currentUser);
        this.router.navigate(['/login']);
        // if (role == 'parent') {
        //   this.router.navigate(["/parent"]);
        // } else if (role == 'teacher') {
        //   this.router.navigate(["/teacher"]);
        // }
      }).catch(err => {
        console.log(err);
      });
    }).catch(err => {
      console.log(err);
    });
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((user) => {
      this.firestore.collection('users').ref.where('username', '==', user.user.email).onSnapshot(snap => {
        snap.forEach(userRef => {
          console.log('userRef', userRef.data());
          this.currentUser = userRef.data();
          this.setUserStatus(this.currentUser);
          if (userRef.data().role == 'teacher') {
            this.router.navigate(['/teacher']);
          } else if (userRef.data().role == 'parent') {
            this.router.navigate(['/parent']);
          }
          localStorage.setItem('role', userRef.data().role);
        });
      });

    }).catch(err => {
      console.log('nope not today', err);
    });
}

signout() {
  return this.afAuth.auth.signOut().then(() => {
    this.router.navigate(['/home']);
  }).catch(function(e) {
    console.error(e);
  });
}
}
