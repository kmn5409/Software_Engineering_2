import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

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
data: string;
id: string;

  constructor(private route: ActivatedRoute, private router: Router, private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  capture_Data(){
    console.log(this.data);
    this.childrenCollection =  this.db.collection('logs');
    this.childrenCollection.add({logDetails: this.data});

  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('childID');
  }

}
