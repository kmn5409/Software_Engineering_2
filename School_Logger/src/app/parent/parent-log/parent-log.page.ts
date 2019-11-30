import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firestore } from 'firebase/app';
import { DateconvertService } from '../../services/dateconvert.service'
import { PopoverController, NavParams } from '@ionic/angular';
import { PopoverComponent } from '../../popover/popover.component';

@Component({
  selector: 'app-parent-log',
  templateUrl: './parent-log.page.html',
  styleUrls: ['./parent-log.page.scss'],
})
export class ParentLogPage implements OnInit {
  id;
  logdetails;
  logtime;
  docid;
  notes;
  childid;
  constructor(private route: ActivatedRoute, private date: DateconvertService, public popoverController: PopoverController) {
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
        this.docid = doc.id;
        this.childid = doc.data().childID;
        this.logtime = this.date.timeSince(doc.data().date.toDate());
        this.notes = doc.data().notes;
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }

  getNotes(){

  }


  async openPopover () {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {
        "id": this.docid,
        page: 'addnote'
      },
      translucent: false,
    });
    return await popover.present();
  }



}
