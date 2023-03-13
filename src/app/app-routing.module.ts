import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers/auth.guard';
import { LoginGuard } from './_helpers/login.guard';

const routes: Routes = [
  {path:'', loadChildren:()=> import('./pages/pages.module').then(m=> m.PagesModule),  canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent, canActivate:[LoginGuard]},
  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
