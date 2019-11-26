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


  async openPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: { page: 'signout' },
      event: ev,
      translucent: false,
    });
    return await popover.present();

}
