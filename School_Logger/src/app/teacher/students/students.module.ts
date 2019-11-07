import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StudentsPage } from './students.page';

const routes: Routes = [
  {
    path: '',
    component: StudentsPage,
    children: [
      {
        path: 'teacher/student-overview',
        // loadChildren: () => import('../student-overview/student-overview.module').then(m => m.StudentOverviewPageModule),
        loadChildren: () => import('../tabs/tabs.router.module').then(m => m.TabsPageRoutingModule),
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentsPage]
})
export class StudentsPageModule {}
