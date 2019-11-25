import { Component, OnInit } from '@angular/core';
import { firestore } from 'firebase/app';
import { ActivatedRoute } from '@angular/router';
import {  NavParams } from '@ionic/angular';
 
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(private route: ActivatedRoute, private navParams: NavParams) { }
 
  ngOnInit() {
    console.table(this.navParams);
  }

  addNoteToLog(note : string, id: string){
    console.log(id);

    
  }

}
