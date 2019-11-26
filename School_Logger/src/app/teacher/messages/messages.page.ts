import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  uid: string;
  constructor(private route: ActivatedRoute, private db: AngularFirestore, public af: AngularFireAuth) { }
  logs = [];
  ngOnInit() {
    this.uid = this.af.auth.currentUser.uid;
    const childrenCollection =  this.db.collection('children', ref => ref.where('userID', 'array-contains', this.uid)).valueChanges();
    childrenCollection.subscribe( (results: any) => {
      for (const result of results) {
        const log = this.db.collection('logs', ref => ref.where('childID', '==', result.childID)).valueChanges().subscribe( (res: any) => {
          for (const r of res) {
          if (r.hasOwnProperty('notes')) {
            for (const n of r.notes) {
              const date = n.date.toDate();
              this.logs.push({
              logID: r.logID,
              date: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' +
              date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() ,
              timeStamp: date,
              note: n.note
            });
          }}}
          });
      }
      }
    );
    this.logs.sort(( a: any , b: any) => {
        return -(a.timeStamp.getTime() - b.timeStamp.getTime());
    });

  }
}
