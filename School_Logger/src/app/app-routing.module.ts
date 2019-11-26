import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), },
  // tslint:disable-next-line: max-line-length
  {path : '', loadChildren: () => import('./parent/tabs/tabs.module').then(m => m.TabsPageModule), canActivate: [AuthguardService], data : {role: 'parent'}},
  // tslint:disable-next-line: max-line-length
  {path : '', loadChildren: () => import('./teacher/tabs/tabs.module').then(m => m.TabsPageModule), canActivate: [AuthguardService], data : {role: 'teacher'}},
  { path: 'message', loadChildren: './teacher/message/message.module#MessagePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'createaccount', loadChildren: './createaccount/createaccount.module#CreateaccountPageModule'},
  { path: '**', redirectTo: 'home' },
  { path: 'form', loadChildren: './teacher/student-logs/form/form.module#FormPageModule' },  { path: 'student-log', loadChildren: './teacher/student-logs/student-log/student-log.module#StudentLogPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
