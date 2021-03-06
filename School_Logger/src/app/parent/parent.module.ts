import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ParentPage } from './parent.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: ParentPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ParentPage }])
  ],
  declarations: [ParentPage]
})
export class ParentPageModule {}
