import { FullLayoutComponent } from './../layouts/full-layout.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { EventManageComponent } from './event-manage.component';
import { EventManageRoutingModule } from './event-manage-routing.module';
import { TimepickerModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
// RECOMMENDED (doesn't work with system.js)
import { AccordionModule } from 'ngx-bootstrap';
import { MdSelectModule } from '@angular/material';

@NgModule({
  imports: [
    EventManageRoutingModule,
    ChartsModule,
    TimepickerModule.forRoot(),
    CommonModule,
    FormsModule,
    AccordionModule.forRoot(),
    MdSelectModule
  ],
  declarations: [ EventManageComponent ],
  providers: [FullLayoutComponent]
})
export class EventManageModule { }
