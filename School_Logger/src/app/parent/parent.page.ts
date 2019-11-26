import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PopoverController} from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.page.html',
  styleUrls: ['./parent.page.scss'],
})
export class ParentPage {
  constructor(private afAuth: AngularFireAuth, private router: Router, public popoverController: PopoverController) {
  }
  pfirstName = [];
  children = new Observable((observer) => {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        const db = firestore();
        const query = db.collection('users').where('userID', '==', user.uid);
        query.get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            const children = doc.data().children;
            const pfirstName = doc.data().firstName;
            // this.pfirstName.push(pfirstName);
            console.log(doc.data().firstName);
            const test = [];
            for (const index in children) {
              const childID = doc.data().children[index];
              const query = db.collection('children').doc(childID);
              query.get()
                .then(doc => {
                  if (!doc.exists) {
                    console.log('No such document!');
                  } else {
                    test.push(doc.data());
                  }
                })
                .catch(err => {
                  console.log('Error getting doment', err);
                });
            }
            observer.next(test);
          });
        });
      }
    });

  });


  goToChild(child) {
    this.router.navigate(['/parent/overview', child.childID]);
  }


  async openPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: { page: 'signout' },
      event: ev,
      translucent: false,
    });
    return await popover.present();
  }





}
