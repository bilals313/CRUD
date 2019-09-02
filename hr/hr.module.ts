import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { Human1Component } from './human1/human1.component';
import { Human2Component } from './human2/human2.component';

@NgModule({
  declarations: [Human1Component, Human2Component],
  imports: [
    CommonModule,
    HrRoutingModule
  ],
  exports: [Human1Component, Human2Component],//exporting

})
export class HrModule { }
