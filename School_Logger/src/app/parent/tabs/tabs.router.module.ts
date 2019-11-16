import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'parent',
    component: TabsPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../parent.module').then(m => m.ParentPageModule),
      },
      {
        path: 'home',
        loadChildren: () => import('../parent.module').then(m => m.ParentPageModule),
      },
      {
        path: 'messages',
        loadChildren: () => import('../messages/messages.module').then(m => m.MessagesPageModule),
      },
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule ),
      },
      { path: 'overview/:id',
      loadChildren: () => import('../parent-overview/parent-overview.module').then(m => m.ParentOverviewPageModule) 
      },
      { path: 'alerts/:id',
      loadChildren: () => import('../parent-alerts/parent-alerts.module').then(m => m.ParentAlertsPageModule) 
      },
      { path: 'logs/:id',
      loadChildren: () => import('../parent-logs/parent-logs.module').then(m => m.ParentLogsPageModule) 
      }

    ],
  },
  {
    path: '',
    redirectTo: '/parent/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
