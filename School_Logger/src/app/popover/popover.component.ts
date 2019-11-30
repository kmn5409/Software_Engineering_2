import { Component, OnInit } from '@angular/core';
import { firestore } from 'firebase/app';
import { ActivatedRoute } from '@angular/router';
import {  NavParams } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController, private route: ActivatedRoute,
              private navParams: NavParams, private auth: AuthService) { }
  page;
  ngOnInit() {
    this.page = this.navParams.data.page;
  }

  addNoteToLog(note: string) {
    const db = firestore();
    const docid = this.navParams.data.id;
    db.collection('logs').doc(docid).set({notes : firestore.FieldValue.arrayUnion({note, date:  new Date()})}, {merge: true} );
    this.popoverController.dismiss();
  }

  signout() {
    this.auth.signout();
    this.popoverController.dismiss();
  }

  addhealthconditions(conditon : string){
    const db = firestore();
    const docid = this.navParams.data.id;
    db.collection('children').doc(docid).set({condition : firestore.FieldValue.arrayUnion(conditon)}, {merge: true} );
    this.popoverController.dismiss();
  }

}
