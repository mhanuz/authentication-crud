import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './_helpers/login.guard';

const routes: Routes = [
  {path:'', loadChildren:()=> import('./pages/pages.module').then(m=> m.PagesModule)},
  {path:'login',component:LoginComponent, canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
