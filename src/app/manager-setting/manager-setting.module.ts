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

import { RouterModule } from '@angular/router';
import { DatepickerModule} from 'ngx-bootstrap/datepicker';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

// RECOMMENDED (doesn't work with system.js)
import { AccordionModule } from 'ngx-bootstrap';
import { MdSelectModule } from '@angular/material';

import { ImageUploadModule } from 'angular2-image-upload';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { ko } from 'ngx-bootstrap/locale';

defineLocale('ko', ko);   

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
    TabsModule.forRoot(),
    JsonpModule,
    MdSelectModule,
    ImageUploadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  declarations: [ 
      ManagerSettingComponent,
   ],

   providers: [
     FullLayoutComponent,
   ]
})
export class ManagerSettingModule { }
