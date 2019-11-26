import { Component, OnInit } from '@angular/core';
import { PopoverController} from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {

  constructor( public popoverController: PopoverController) { }

  ngOnInit() {
  }


  async openPopover() {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: { page: 'signout' },
      translucent: false,
    });
    return await popover.present();

}

}