import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent-alerts',
  templateUrl: './parent-alerts.page.html',
  styleUrls: ['./parent-alerts.page.scss'],
})
export class ParentAlertsPage implements OnInit {

  id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
