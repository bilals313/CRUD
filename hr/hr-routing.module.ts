import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Finance1Component } from '../finance/finance1/finance1.component';
import { Finance2Component } from '../finance/finance2/finance2.component';

const routes: Routes = [
  {path:"hum1",component:Finance1Component},
  {path:"hum2",component:Finance2Component}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
