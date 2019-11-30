import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs';
import { PopoverController, NavParams } from '@ionic/angular';
import { PopoverComponent } from '../../popover/popover.component';


@Component({
  selector: 'app-parent-overview',
  templateUrl: './parent-overview.page.html',
  styleUrls: ['./parent-overview.page.scss'],
})
export class ParentOverviewPage implements OnInit {
  constructor(public popoverController: PopoverController , private route: ActivatedRoute, private afAuth: AngularFireAuth) { }
  id: string;

 childData = new Observable((observer) => {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        const db = firestore();
        const query = db.collection('children').doc(this.id);
        query.get().then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              const x = doc.data();
              x.age = this.calculateDob(x.dateOfBirth);
              observer.next([x]);
              x.users = [];
              for (const user of x.userID) {
                db.collection('users').doc(user).get().then(
                  result => {
                    const r = result.data();
                    const person = {
                      name: r.firstName + ' ' + r.lastName,
                      role: r.role
                    };
                    x.users.push(person);

                  }
                );
              }
            }
          })
          .catch(err => {
            console.log('Error getting doment', err);
          });
      }
    })
  })

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  calculateDob(dob){
    const timeDiff = Math.abs(Date.now() - new Date(dob).getTime());
    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    return age;
  }

  async openPopover () {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {
        "id": this.id,
        page: 'overview'
      },
      translucent: false,
    });
    return await popover.present();
  }

}
