import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tempbuttonpageforkeanu', pathMatch: 'full' },
  { path: 'tempbuttonpageforkeanu', loadChildren: './tempbuttonpageforkeanu/tempbuttonpageforkeanu.module#TempbuttonpageforkeanuPageModule' },


  
  {path : '', loadChildren: () => import('./parent/tabs/tabs.module').then(m => m.TabsPageModule)},

  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
