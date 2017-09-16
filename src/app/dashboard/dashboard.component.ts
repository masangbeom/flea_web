import { FullLayoutComponent } from './../layouts/full-layout.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  private user: any;
  private booths: any;
  // Pie
  public pieChartLabels:string[];
  public pieChartData:number[];
  public pieChartType:string = 'pie';

  constructor(public db: AngularFireDatabase, public accountKey: FullLayoutComponent){
    this.db.object('/accounts/'+this.accountKey.accountKey).subscribe((account)=>{
      this.user = account;
    })
    let temp:string[]= [];
    this.db.list('/accounts/'+this.accountKey.accountKey + '/booths/').subscribe((booths)=>{
      this.booths = booths;
      this.booths.forEach(element => {
        temp.push(element.mName);
      });
      console.log(temp);
    })
    this.pieChartData = [(Math.round(Math.random() * 100)), (Math.round(Math.random() * 100)), (Math.round(Math.random() * 100))]; 
    this.pieChartLabels = temp;
    this.pieChartDataControl();
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

  pieChartDataControl(){
  let pieInterval = setInterval(()=>{
    this.pieChartData = [(Math.round(Math.random() * 100)), (Math.round(Math.random() * 100)), (Math.round(Math.random() * 100))];  
  }, 3000)
  
  }
}
