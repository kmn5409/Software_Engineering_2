import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parent-overview',
  templateUrl: './parent-overview.page.html',
  styleUrls: ['./parent-overview.page.scss'],
})
export class ParentOverviewPage implements OnInit {
  constructor(private route: ActivatedRoute, private afAuth: AngularFireAuth) { }
  id;

 childData = new Observable((observer) => {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        const db = firestore();
        const query = db.collection('children').doc(this.id);
        query.get().then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              let x = doc.data();
              x.age = this.calculateDob(x.dateOfBirth);
              console.log(x);
              observer.next([x]);
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
    console.log('it works', this.id);
  }

  calculateDob(dob){
    const timeDiff = Math.abs(Date.now() - new Date(dob).getTime());
    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    console.log(age);
    return age;
  }

}
