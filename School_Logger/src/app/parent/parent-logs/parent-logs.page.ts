import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parent-logs',
  templateUrl: './parent-logs.page.html',
  styleUrls: ['./parent-logs.page.scss'],
})
export class ParentLogsPage implements OnInit {
  id;
  constructor(private route: ActivatedRoute, private afAuth: AngularFireAuth) { }

  

  logData = new Observable((observer) => {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        const db = firestore();
        const logref = db.collection('logs');
        const query = logref.where('childID' , '==', this.id).get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.');
            return;
          }  
          let x = [];
          snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            x.push(doc.data());
           
          });
          observer.next(x);
          
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
      }
    })
  })
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    
  }

}
