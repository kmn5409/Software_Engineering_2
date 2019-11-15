import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

interface Log{
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

  constructor(private db: AngularFirestore, public af: AngularFireAuth) { }

  capture_Data(){
    console.log(this.data);
    this.childrenCollection =  this.db.collection('logs');
    this.childrenCollection.add({logDetails: this.data});

  }
    
  ngOnInit() {
  }

}
