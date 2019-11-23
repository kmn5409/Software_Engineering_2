import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parent-logs',
  templateUrl: './parent-logs.page.html',
  styleUrls: ['./parent-logs.page.scss'],
})
export class ParentLogsPage implements OnInit {
  id;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
