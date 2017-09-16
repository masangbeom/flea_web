import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { EventManageComponent } from './event-manage.component';


const routes: Routes = [
  {
    path: '',
    component: EventManageComponent,
    data: {
      title: 'EventManage'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventManageRoutingModule {}
