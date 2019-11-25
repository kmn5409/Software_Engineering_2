import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-overview',
  templateUrl: './student-overview.page.html',
  styleUrls: ['./student-overview.page.scss'],
})
export class StudentOverviewPage implements OnInit {
  id: string;
  private sub: any;
  children: Observable<any>;
  child: any;
  age: number;
  users = [];
  constructor(private route: ActivatedRoute, private router: Router, private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  ngOnInit() {
  this.id = this.route.snapshot.paramMap.get('childID');
  this.children =  this.db.collection('children', ref => ref.where('childID', '==', this.id)).valueChanges();
  this.children.subscribe( results => {
  for ( const result of results) {
    this.age = this.calculateDob(result.dateOfBirth);
    for (const user of result.userID) {
      const x = this.db.collection('users', ref => ref.where('userID', '==', user)).valueChanges();
      x.subscribe( innerUser => {
        for (const u of innerUser) {
        this.users.push(u);
    }
  }); }
}
});
}


  calculateDob(dob: string | number | Date) {
    const timeDiff = Math.abs(Date.now() - new Date(dob).getTime());
    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    return age;
  }

}
