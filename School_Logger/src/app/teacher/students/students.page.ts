import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router'

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage {
  childrenCollection: AngularFirestoreCollection<any>;
  children: Observable<any[]>;
  uid: string;
  constructor(private db: AngularFirestore, public af: AngularFireAuth) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.uid = this.af.auth.currentUser.uid;
    this.childrenCollection =  this.db.collection('children', ref => ref.where('userID', 'array-contains', this.uid));
    this.children = this.childrenCollection.valueChanges();
  }




}

