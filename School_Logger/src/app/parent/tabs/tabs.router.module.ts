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
        // children: [
        //   {
        //     path: '',
        //     loadChildren: () =>
        //       import('../parent.module').then(m => m.ParentPageModule)
        //   }
        // ]
      },
      {
        path: 'messages',
        loadChildren: () => import('../messages/messages.module').then(m => m.MessagesPageModule),
      },
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule ),
      },
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
