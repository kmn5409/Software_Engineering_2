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
        path: 'student-overview/:childID',
        loadChildren: () => import('../student-overview/student-overview.module').then(m => m.StudentOverviewPageModule),
        },
        {
          path: 'messages',
          loadChildren: () => import('../messages/messages.module').then(m => m.MessagesPageModule),
        },
        {
          path: 'student-alerts/:childID',
          loadChildren: () => import('../student-alerts/student-alerts.module').then(m => m.StudentAlertsPageModule),

        },
        {
          path: 'student-logs/:childID',
          loadChildren: () => import ('../student-logs/student-logs.module').then(m => m.StudentLogsPageModule),
        },
        {
          path: 'message',
          loadChildren: () => import('../message/message.module').then(m => m.MessagePageModule),
        },
        {
          path: 'notifications',
          loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule ),
        },
        { path: 'students',
            loadChildren: () => import('../students/students.module').then(m => m.StudentsPageModule),
        },
        {
          path: 'form/:childID',
          loadChildren: () => import('../student-logs/form/form.module').then(m => m.FormPageModule)
        }
      ],
    },
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class TabsPageRoutingModule { }
