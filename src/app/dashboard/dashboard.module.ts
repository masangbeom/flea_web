import { FullLayoutComponent } from './../layouts/full-layout.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { D3Service } from 'd3-ng2-service'; // <-- import statement
import { BrushZoom2Component } from '../brushzoom/brush-zoom-2.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    CommonModule,
    
  ],
  declarations: [ DashboardComponent, BrushZoom2Component ],
  providers: [FullLayoutComponent, D3Service]
})
export class DashboardModule { }
