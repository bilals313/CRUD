import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Finance1Component } from './finance1/finance1.component';
import { Finance2Component } from './finance2/finance2.component';

const routes: Routes = [
  {path:'fin1',component:Finance1Component},
  {path:'fin2',component:Finance2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
