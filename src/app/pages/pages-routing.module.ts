import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {path:'', component:PagesComponent,
    children:[
      {path:'', component:HomeComponent},
      {path:'admin', component:AdminComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }