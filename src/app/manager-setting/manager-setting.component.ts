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

  rangeDate: string;

  _bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];
  get bsRangeValue(): any {
    return this._bsRangeValue;
  }
 
  set bsRangeValue(v: any) {
    this._bsRangeValue = v;
  }
 
  log(v: any) {console.log(v);}

  addBooth(mName, mDescription, mHashtag, mImage){
    let date1 = moment(this._bsRangeValue[0]).format('YYYY-MM-DD');
    let date2 = moment(this._bsRangeValue[1]).format('YYYY-MM-DD');
    console.log(this._bsRangeValue)
    let booth = {
      mName: mName,
      mDescription: mDescription,
      mHashtag: mHashtag,
      mBeacon: this.selectedValue,
      mImage: mImage,
      mDate: date1 + " - " + date2,
    }
    
    this.db.list('/accounts/'+this.accountKey.accountKey + '/booths/').push(booth).then((success)=>{
      this.db.object('/accounts/'+this.accountKey.accountKey + '/booths/' + success.key).update({
        mKey: success.key       
      })
    })
  
  }
}

