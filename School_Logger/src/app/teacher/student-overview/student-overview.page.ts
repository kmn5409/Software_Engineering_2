import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-student-overview',
  templateUrl: './student-overview.page.html',
  styleUrls: ['./student-overview.page.scss'],
})
export class StudentOverviewPage implements OnInit {
  id;
  constructor(private route: ActivatedRoute, private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('it works', this.id);
  }

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


  goToLogs(child) {
    console.log('hey', child.firstName);
    this.router.navigate(['/teacher/student-logs/', child.childID]);

  }


  calculateDob(dob){
    const timeDiff = Math.abs(Date.now() - new Date(dob).getTime());
    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    console.log(age);
    return age;
  }

}
