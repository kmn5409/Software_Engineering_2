import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-parent-overview',
  templateUrl: './parent-overview.page.html',
  styleUrls: ['./parent-overview.page.scss'],
})
export class ParentOverviewPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log('it workes', id);
  }


  
}
