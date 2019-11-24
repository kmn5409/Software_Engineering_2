import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firestore } from 'firebase/app';
import { DateconvertService } from '../../services/dateconvert.service'

@Component({
  selector: 'app-parent-log',
  templateUrl: './parent-log.page.html',
  styleUrls: ['./parent-log.page.scss'],
})
export class ParentLogPage implements OnInit {
  id;
  logdetails;
  logtime;
  constructor(private route: ActivatedRoute, private date: DateconvertService) {
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
        console.log(doc.data().date);
        this.logtime = this.date.timeSince(doc.data().date);
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
