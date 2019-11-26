import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { PopoverController} from '@ionic/angular';
import { PopoverComponent } from '../../popover/popover.component';


@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage {
  childrenCollection: AngularFirestoreCollection<any>;
  children: Observable<any[]>;
  uid: string;
  constructor( public popoverController: PopoverController, private db: AngularFirestore, public af: AngularFireAuth) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.uid = this.af.auth.currentUser.uid;
    if (this.uid) {
    console.log(this.uid);
    }
    // tslint:disable-next-line: max-line-length
    this.childrenCollection =  this.db.collection('children', ref => ref.where('userID', 'array-contains', this.uid).orderBy('grade', 'asc'));
    this.children = this.childrenCollection.valueChanges();
  }


  
  async openPopover() {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: { page: 'signout' },
      translucent: false,
    });
    return await popover.present();
  }




}

