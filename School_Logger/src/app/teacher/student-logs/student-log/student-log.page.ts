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
  constructor(private route: ActivatedRoute, private router: Router, private af: AngularFireAuth, private db: AngularFirestore) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('logID');
  }

}
