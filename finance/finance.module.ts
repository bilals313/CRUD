import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { Finance1Component } from './finance1/finance1.component';
import { Finance2Component } from './finance2/finance2.component';

@NgModule({
  declarations: [Finance1Component, Finance2Component],
  imports: [
    CommonModule,
    FinanceRoutingModule
  ],
exports: [Finance1Component, Finance2Component]
})
export class FinanceModule { }
