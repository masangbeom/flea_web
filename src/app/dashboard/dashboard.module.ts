import { FullLayoutComponent } from './../layouts/full-layout.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule
  ],
  declarations: [ DashboardComponent ],
  providers: [FullLayoutComponent]
})
export class DashboardModule { }
