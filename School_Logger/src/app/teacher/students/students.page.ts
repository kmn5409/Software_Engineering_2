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
  tasksRef: AngularFireList<any>;
  tasks: Observable<any[]>;

  constructor(public db: AngularFireDatabase){
  this.tasksRef = db.list('/tasks/users');

    this.tasks = this.tasksRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

  }  

  ngOnInit() {
  }

}
