import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage {
  childrenCollection: AngularFirestoreCollection<any>;
  children: Observable<any[]>;
  uid: string;
  constructor(private db: AngularFirestore, public af: AngularFireAuth){}

  ngOnInit() {
    this.childrenCollection =  this.db.collection('children');
    this.children = this.childrenCollection.valueChanges();
    //this.af.auth.subscribe(auth => console.log(auth));
    console.log(this.af.auth);
    console.log(this.af.auth.userID);
    console.log('User');
    console.log(this.af.auth.currentUser);
    console.log(this.af.auth.currentUser.email);
    console.log(this.af.auth.currentUser.uid);
    this.uid = this.af.auth.currentUser.uid;
  }


}

