import { FullLayoutComponent } from './../layouts/full-layout.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { AngularFireModule } from 'angularfire2';
import { ManagerSettingRoutingModule } from './manager-setting-routing.module';
import { ManagerSettingComponent } from './manager-setting.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeviewModule } from 'ngx-treeview';
import { JsonpModule } from '@angular/http';
// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

// RECOMMENDED (doesn't work with system.js)
import { AccordionModule } from 'ngx-bootstrap';
import { MdSelectModule } from '@angular/material';

import { ImageUploadModule } from 'angular2-image-upload'

@NgModule({
  imports: [
    ManagerSettingRoutingModule,
    TreeviewModule.forRoot(),
    BsDropdownModule,
    AccordionModule.forRoot(),
    CommonModule,
    ModalModule.forRoot(),
    FormsModule, ReactiveFormsModule,
    AngularFireDatabaseModule,
    TabsModule,
    JsonpModule,
    MdSelectModule,
    ImageUploadModule.forRoot(),
    
  ],
  declarations: [ 
      ManagerSettingComponent,
   ],

   providers: [
     FullLayoutComponent,
   ]
})
export class ManagerSettingModule { }
