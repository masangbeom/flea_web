import { FullLayoutComponent } from './../layouts/full-layout.component';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { TreeviewI18n, TreeviewItem, TreeviewConfig, TreeviewHelper, TreeviewComponent,
  TreeviewEventParser, OrderDownlineTreeviewEventParser, DownlineTreeviewItem } from 'ngx-treeview';
import * as moment from 'moment';
import * as _ from 'lodash';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

@Injectable()
export class ProductTreeviewConfig extends TreeviewConfig {
  hasAllCheckBox = false;
  hasFilter = false;
  hasCollapseExpand = false;
  maxHeight = 800;
}

@Component({
  templateUrl: 'manager-setting.component.html',
  providers: [
    {
      provide: TreeviewEventParser,
      useClass: OrderDownlineTreeviewEventParser
    },
    {
      provide: TreeviewConfig,
      useClass: ProductTreeviewConfig
    }
  ]
})

export class ManagerSettingComponent implements OnInit {
  private user: any;
  
  constructor(public db: AngularFireDatabase, public accountKey: FullLayoutComponent) {
    this.db.object('/accounts/'+this.accountKey.accountKey).subscribe((account)=>{
      this.user = account;
    })
  }

  ngOnInit() {
    
  }

}

