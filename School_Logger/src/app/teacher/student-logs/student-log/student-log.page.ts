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
  selector: 'app-student-log',
  templateUrl: './student-log.page.html',
  styleUrls: ['./student-log.page.scss'],
})
export class StudentLogPage implements OnInit {
  id: string;
  log = {};
  constructor(private route: ActivatedRoute, private router: Router, private af: AngularFireAuth, private db: AngularFirestore) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('logID');

    this.db.collection('logs', ref => ref.where('logID', '==', this.id)).valueChanges().subscribe(
      (results: any) => {
        for (const result of results) {
          const user = this.db.collection('users', ref => ref.where('userID', '==', result.userID)).valueChanges();
          user.subscribe( (data: any) => {
          for (const d of data) {
          result.user = d.firstName + ' ' + d.lastName;
          result.image = 'https://secure.i.telegraph.co.uk/multimedia/archive/03127/terry_crews_3127762b.jpg';
          }
          result.date = result.date.toDate();
          result.date = result.date.getDate() + '/' + result.date.getMonth() + '/' + result.date.getFullYear();
          for (const note of result.notes) {
            note.date = note.date.toDate();
            note.date = note.date.getDate() + '/' + note.date.getMonth() + '/' + note.date.getFullYear();
          }
          this. log = result;
          });
        }
        });
  }

}
