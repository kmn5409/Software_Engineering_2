import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs';
import * as moment from 'moment'

@Component({
  selector: 'app-parent-overview',
  templateUrl: './parent-overview.page.html',
  styleUrls: ['./parent-overview.page.scss'],
})
export class ParentOverviewPage implements OnInit {
  id;
  constructor(private route: ActivatedRoute, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('it works', this.id);
  }

 childData = new Observable((observer) => {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        const db = firestore();
        const query = db.collection('children').doc(this.id);
        query.get().then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              console.log(doc.data());
              observer.next([doc.data()]);
            }
          })
          .catch(err => {
            console.log('Error getting doment', err);
          });
      }
    })
  })

  

}