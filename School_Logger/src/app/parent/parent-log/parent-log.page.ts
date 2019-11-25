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
        console.log(this.docid);
        let y =  doc.data().date.toDate();
        this.logtime = this.date.timeSince(y.getMonth() + '/' + y.getDate()+ '/' + y.getFullYear());
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }


  async openPopover (ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {
        "id": this.docid,
        page: 'addnote'
      },
      event: ev,
      translucent: false,
    });
    return await popover.present();
  }



}
