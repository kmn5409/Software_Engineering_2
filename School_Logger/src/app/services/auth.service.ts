import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from "@angular/router";
import { AngularFirestore , AngularFirestoreCollection,  AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable, BehaviorSubject } from 'rxjs';


interface User {
  email?: string;
  password?: string;
  role?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User = {
    email: 'jahrel@email.com',
    password: 'password',
    role: 'parent'
  }

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore , private router: Router) { }

  public currentUser: any;
  public userStatus: string;
  public userStatusChanges: BehaviorSubject<string> = new BehaviorSubject<string>(this.userStatus);
  

  setUserStatus(userStatus: any): void {
    this.userStatus = userStatus;
    this.userStatusChanges.next(userStatus);
  }

  createAccount(email : string, password : string, role : string) {
    this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    ).then((userResponse) => {
      let user = {
        id: userResponse.user.uid,
        username: userResponse.user.email,
        role : role
      }
      this.firestore.collection("users").add(user)
        .then(user => {
          user.get().then(x => {
            console.log(x.data());
            this.currentUser = x.data();
            this.setUserStatus(this.currentUser);
            console.log(role);
            if (role == 'parent') {
              this.router.navigate(["/parent"]);
            }else if(role == 'teacher') {
              this.router.navigate(["/teacher"]);
            }
          })
        }).catch(err => {
          console.log(err);
        })
    }).catch((err) => {
      console.log("An error ocurred: ", err);
    })
  }

  login(email: string, password: string) {
      
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((user)=>{
      this.firestore.collection("users").ref.where("username", "==", user.user.email).onSnapshot(snap =>{
        snap.forEach(userRef => {
          console.log("userRef", userRef.data());
          this.currentUser = userRef.data();
          this.setUserStatus(this.currentUser)
          if(userRef.data().role == "teacher") {
            this.router.navigate(["/teacher"]);
          }else if(userRef.data().role == "parent"){
            this.router.navigate(["/parent"]);
          }
        })
      })
     
    }).catch(err => {
      console.log('nope not today', err);
    })
}

signout(){

}




}
