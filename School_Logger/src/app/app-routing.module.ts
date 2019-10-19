import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },

  {
    path: "parent",
    children: [
      {
        path: '',
        loadChildren: "./parent/parent.module#ParentPageModule"
  
      },
      {
        path: ':parent-overview',
        loadChildren: "./parent/parent-overview/parent-overview.module#ParentOverviewPageModule"
      }
    ]
  },
  // { path: 'parent', loadChildren: './parent/parent.module#ParentPageModule' },
  // { path: 'parent-logs', loadChildren: './parent/parent-logs/parent-logs.module#ParentLogsPageModule' },
  // { path: 'parent-alerts', loadChildren: './parent/parent-alerts/parent-alerts.module#ParentAlertsPageModule' },
  // { path: 'parent-overview', loadChildren: './parent/parent-overview/parent-overview.module#ParentOverviewPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
