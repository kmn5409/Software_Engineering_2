import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

interface Log {
    details: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
childrenCollection: AngularFirestoreCollection<any>;
children: Observable<any[]>;
data: string;
id: string;
uid: string;

  constructor(private route: ActivatedRoute, private router: Router, private af: AngularFireAuth, private db: AngularFirestore) {
    this.uid = this.af.auth.currentUser.uid;
    this.id = this.route.snapshot.paramMap.get('childID');
    this.children =  this.db.collection('children', ref => ref.where('childID', '==', this.id)).valueChanges();
     }

  capture_Data() {
    const date = new Date();
    this.childrenCollection =  this.db.collection('logs');
    this.childrenCollection.add({logID: this.db.createId(), logDetails: this.data, childID: this.id, userID: this.uid, date});
    this.router.navigate(['/teacher/student-logs', this.id]);
}
  ngOnInit() {
  }

}
