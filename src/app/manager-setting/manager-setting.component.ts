import { FullLayoutComponent } from './../layouts/full-layout.component';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';
import * as _ from 'lodash';

//DatePicker
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/bs-moment';
import { defineLocale } from 'ngx-bootstrap/bs-moment';
@Component({
  templateUrl: 'manager-setting.component.html',
})

export class ManagerSettingComponent implements OnInit {
  private user: any;
  selectedValue: string;
  
    beacons = [
      {
        id: "38547"
      },
      {
        id: "16501"
      },
      {
        id: "978"
      }
    ];
      
  bsConfig: Partial<BsDatepickerConfig>;
  colorTheme = 'theme-default';
  locale = 'ko';
  constructor(public db: AngularFireDatabase, public accountKey: FullLayoutComponent) {
    this.db.object('/accounts/'+this.accountKey.accountKey).subscribe((account)=>{
      this.user = account;
    })
    this.bsConfig = Object.assign({}, { locale: this.locale,
                                        containerClass: this.colorTheme,
    });
  }

  ngOnInit() {
    
  }


  addBooth(mName, mDescription, mHashtag, mImage){
    this.db.list('/accounts/'+this.accountKey.accountKey + '/booths/').push({
      mName: mName,
      mDescription: mDescription,
      mHashtag: mHashtag,
      mBeacon: this.selectedValue,
      mImage: mImage
    }).then((success)=>{
      this.db.object('/accounts/'+this.accountKey.accountKey + '/booths/' + success.key).update({
        mKey: success.key       
      })
    })
  
  }
}

