import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path : '', loadChildren: () => import('./parent/tabs/tabs.module').then(m => m.TabsPageModule)},
  {path : '', loadChildren: () => import('./teacher/tabs/tabs.module').then(m => m.TabsPageModule)},
  { path: 'popover', loadChildren: './parent/popover/popover.module#PopoverPageModule' },
  { path: 'message', loadChildren: './teacher/message/message.module#MessagePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
