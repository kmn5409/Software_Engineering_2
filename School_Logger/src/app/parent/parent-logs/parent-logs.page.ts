import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs';
import { DateconvertService } from '../../services/dateconvert.service'


@Component({
  selector: 'app-parent-logs',
  templateUrl: './parent-logs.page.html',
  styleUrls: ['./parent-logs.page.scss'],
})
export class ParentLogsPage implements OnInit {
  id;
  hasLogs: boolean;
  constructor(private date: DateconvertService, private route: ActivatedRoute, private afAuth: AngularFireAuth) { }
 
  logs = new Observable((observer) => {
        const db = firestore();
        const logref = db.collection('logs');
        const query = logref.where('childID' , '==', this.id).get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.');
            this.hasLogs = false;
            return;
          }  
          let x = [];
          snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            let y =  doc.data();
            y.dateago =  doc.data().date.toDate();
            y.dateago = this.date.timeSince(y.dateago.getMonth() + '/' + y.dateago.getDate()+ '/' + y.dateago.getFullYear());
            x.push(y);
           
          });
          this.hasLogs = true;
          observer.next(x);
          
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
  })
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');   
  }

  

}
