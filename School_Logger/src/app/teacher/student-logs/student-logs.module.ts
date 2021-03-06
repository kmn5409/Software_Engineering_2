import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StudentLogsPage } from './student-logs.page';

const routes: Routes = [
  {
    path: '',
    component: StudentLogsPage,
    children: [
    {
      path: 'form',
      loadChildren: () => import('./form/form.module').then(m => m.FormPageModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentLogsPage]
})
export class StudentLogsPageModule {}
