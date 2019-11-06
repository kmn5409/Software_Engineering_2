import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
      path: 'teacher',
      component: TabsPage,
      children: [
        {
          path: '',
          loadChildren: () => import('../students/students.module').then(m => m.StudentsPageModule),
        },
        {
          path: 'messages',
          loadChildren: () => import('../messages/messages.module').then(m => m.MessagesPageModule),
        },
        {
          path: 'messages/message/:id',
          loadChildren: () => import('../message/message.module').then(m => m.MessagePageModule),
        },
        {
          path: 'notifications',
          loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule ),
        },
        { path: 'students',
            loadChildren: () => import('../students/students.module').then(m => m.StudentsPageModule),
        },
      ],
    },
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class TabsPageRoutingModule { }
