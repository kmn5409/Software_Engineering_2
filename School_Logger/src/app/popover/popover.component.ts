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
    console.log(this.page);


  }

  addNoteToLog(note: string) {
    const db = firestore();
    const docid = this.navParams.data.id;
    db.collection('logs').doc(docid).set({notes: [{note, date:  new Date()}]}, {merge: true});
    // db.collection('logs').doc(docid).update({notes: });
    this.popoverController.dismiss();
  }

  signout() {
    this.auth.signout();
    this.popoverController.dismiss();
  }

  addhealthconditions(){
    
    this.popoverController.dismiss();
  }

}
