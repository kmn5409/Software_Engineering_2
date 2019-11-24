import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parent-log',
  templateUrl: './parent-log.page.html',
  styleUrls: ['./parent-log.page.scss'],
})
export class ParentLogPage implements OnInit {
  id;
  logdetails;
  constructor(private route: ActivatedRoute) {
   }

  ngOnInit() {
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.getLogDetails();
  }
  
  getLogDetails(){

    const db = firestore();
    const logref = db.collection('logs');
    const query = logref.where('logID' , '==', this.id).get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }  
      snapshot.forEach(doc => {
        this.logdetails = doc.data().logDetails;
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }
  addNoteToLog() {
    console.log("note added");

  }
}
