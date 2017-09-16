import { FullLayoutComponent } from './../layouts/full-layout.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgModule } from '@angular/core';

@Component({
  templateUrl: 'event-manage.component.html'
})
export class EventManageComponent {
  private user: any;
  public mytime: Date = new Date();
  private booths: any;

  constructor(public db: AngularFireDatabase, public accountKey: FullLayoutComponent){
    this.db.object('/accounts/'+this.accountKey.accountKey).subscribe((account)=>{
      this.user = account;
    })
    this.db.list('/accounts/'+this.accountKey.accountKey+'/booths/').subscribe((booths)=>{
      this.booths = booths;
    })
  }
}
