import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FillformComponent } from './components/fillform/fillform.component';

const routes: Routes = [
  {
    path:"form",
    component:FillformComponent,
    pathMatch:"full"
  }
  ,
  {
    path:'',
    component:HomeComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
