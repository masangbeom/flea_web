import { FullLayoutComponent } from './../layouts/full-layout.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  private user: any;

  constructor(public db: AngularFireDatabase, public accountKey: FullLayoutComponent){
    this.db.object('/accounts/'+this.accountKey.accountKey).subscribe((account)=>{
      this.user = account;
    })
    console.log(this.user);
  // let account1 = {
  //   id: "a-coex",
  //   password: "0000" 
  // }
  // let account2 = {
  //   id: "b-coex",
  //   password: "0000" 
  // }
  // let account3 = {
  //   id: "c-coex",
  //   password: "0000" 
  // }
  // let account4 = {
  //   id: "openhack-museum",
  //   password: "0000" 
  // }
  // this.db.list('/accounts/').push(account1).then((success)=>{
  //   this.db.object('/accounts/' + success.key).update({
  //     accountKey: success.key
  //   })
  // })
  // this.db.list('/accounts/').push(account2).then((success)=>{
  //   this.db.object('/accounts/' + success.key).update({
  //     accountKey: success.key
  //   })
  // })
  // this.db.list('/accounts/').push(account3).then((success)=>{
  //   this.db.object('/accounts/' + success.key).update({
  //     accountKey: success.key
  //   })
  // })
  // this.db.list('/accounts/').push(account4).then((success)=>{
  //   this.db.object('/accounts/' + success.key).update({
  //     accountKey: success.key
  //   })
  // })



  }
}
