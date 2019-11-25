import { Component, OnInit } from '@angular/core';
import { firestore } from 'firebase/app';
import { ActivatedRoute } from '@angular/router';
import {  NavParams } from '@ionic/angular';
 
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(private route: ActivatedRoute, private navParams: NavParams) { }
 
  ngOnInit() {
    console.log(this.navParams.data.id);
  }

  addNoteToLog(note : string){
    const db = firestore();
    const docid = this.navParams.data.id;
    db.collection('logs').doc(docid).set({notes: [{note: note, date:  new Date()}]}, {merge: true});
    //db.collection('logs').doc(docid).update({notes: });
  }

}
