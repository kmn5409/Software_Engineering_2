import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../parent/popover/popover.page';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.page.html',
  styleUrls: ['./parent.page.scss'],
})
export class ParentPage{
  value = 0;
  constructor(private popovercontroller: PopoverController) { }
  async openPopUp(ev : any){
    const popover = await this.popovercontroller.create({
      component: PopoverPage,
      // componentProps: {
      //   custom_id: this.value
      // }
      event: ev

    });
  return await popover.present();

  }
}
