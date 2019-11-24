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
  selector: 'app-student-logs',
  templateUrl: './student-logs.page.html',
  styleUrls: ['./student-logs.page.scss'],
})
export class StudentLogsPage implements OnInit {
  id: string;
  logs = [];
  constructor(private route: ActivatedRoute, private router: Router, private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('childID');
    this.db.collection('logs', ref => ref.where('childID', '==', this.id).orderBy('date', 'desc')).valueChanges().subscribe(
      results => {
        for (const result of results)
        {
        this.logs.push(result);
        }
        });
  }

}
