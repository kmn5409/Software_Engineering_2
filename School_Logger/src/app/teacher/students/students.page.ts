import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
  childrenRef: AngularFireList<any>;
  children: Observable<any[]>;

<<<<<<< HEAD
  constructor(public db: AngularFireDatabase) {
  this.tasksRef = db.list('/tasks/users');

  this.tasks = this.tasksRef.snapshotChanges().pipe(
=======
  constructor(public db: AngularFireDatabase){
  this.childrenRef = db.list('/children');

    this.children = this.childrenRef.snapshotChanges().pipe(
>>>>>>> b54666fd7be693572192a0d8fbf04160dd9a37e3
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

  }

  ngOnInit() {
  }

}
