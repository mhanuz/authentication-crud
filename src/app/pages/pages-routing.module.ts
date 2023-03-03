import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {path:'', component:PagesComponent,
    children:[
      {path:'', component:HomeComponent, canActivate:[AuthGuard]},
      {path:'admin', component:AdminComponent},
      {path:'list', component:ListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }