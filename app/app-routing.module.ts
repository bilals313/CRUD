import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddempComponent } from './addemp/addemp.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { NavComponent } from './nav/nav.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [

  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},//default routing blank
  {path:'addemp', component:AddempComponent,canActivate:[AuthGuard]},
  {path:'', component:LoginComponent},
  {path:'update/:id', component:UpdateComponent,canActivate:[AuthGuard]},
  {path:'nav', component:NavComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
