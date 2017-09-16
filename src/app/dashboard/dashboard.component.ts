import { FullLayoutComponent } from './../layouts/full-layout.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public brandPrimary = '#20a8d8';
  public brandSuccess = '#4dbd74';
  public brandInfo = '#63c2de';
  public brandWarning = '#f8cb00';
  public brandDanger = '#f86c6b';

  private user: any;
  private booths: any;
  // Pie
  public pieChartLabels: string[];
  public pieChartData: number[];
  public pieChartType: string = 'pie';
  public pieChartColours: Array < any > = [{ // brandInfo
    backgroundColor: ['#F27F0E', '#2C9F2C', '#1F77B3'],
    borderColor: '#2b2c2e',
  },
  ];
  // LineChart
  public mainChartElements = 12;
  public mainChartData1: Array < number > = [];
  public mainChartData: Array < any > = [{
    data: this.mainChartData1,
    label: '방문 시간(초)'
  }];

  public mainChartData2: Array < number > = [];
  public mainChart2Data: Array < any > = [{
    data: this.mainChartData2,
    label: '방문 시간(초)'
  }];
 
  public mainChartData3: Array < number > = [];
  public mainChart3Data: Array < any > = [{
    data: this.mainChartData3,
    label: '방문 시간(초)'
  }];

  public mainChartLabels: Array < any > = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  public mainChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function (value: any) {
            return value;
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 1),
          max: 1200
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false,
      labels: {
        fontColor: "white"
      }
    }
  };
  // convert Hex to RGBA
  public convertHex(hex: string, opacity: number) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
    return rgba;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  public mainChartColours: Array < any > = [{ // brandInfo
      backgroundColor: this.convertHex(this.brandInfo, 10),
      borderColor: this.brandInfo,
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: this.brandSuccess,
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: this.brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      borderDash: [8, 5]
    }
  ];

  public mainChartLegend = false;
  public mainChartType = 'line';

  constructor(public db: AngularFireDatabase, public accountKey: FullLayoutComponent) {
    this.db.object('/accounts/' + this.accountKey.accountKey).subscribe((account) => {
      this.user = account;
    })
    let temp: string[] = [];
    this.db.list('/accounts/' + this.accountKey.accountKey + '/booths/').subscribe((booths) => {
      this.booths = booths;
      this.booths.forEach(element => {
        temp.push(element.mName);
      });
      console.log(temp);
    })
    this.pieChartData = [(Math.round(Math.random() * 100)), (Math.round(Math.random() * 100)), (Math.round(Math.random() * 100))];
    this.pieChartLabels = temp;

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
    for (let i = 0; i <= this.mainChartElements; i++) {
      this.mainChartData1.push(this.random(10, 1200));
      this.mainChartData2.push(this.random(10, 1200));
      this.mainChartData3.push(this.random(10, 1200));
    }
  }

  pieChartDataControl() {
    let pieInterval = setInterval(() => {
      this.pieChartData = [(Math.round(Math.random() * 100)), (Math.round(Math.random() * 100)), (Math.round(Math.random() * 100))];
    }, 3500)
  }

  mainChartDataControl() {
    let mainChartInterval = setInterval(() => {


      let _mainChartLabels: Array < any > = this.mainChartLabels;
      let temp;
      console.log(_mainChartLabels);
      temp=_mainChartLabels[11];
      for(let i=10; i>=0; i--)
      {
         _mainChartLabels[i+1]=_mainChartLabels[i];  
      }
      _mainChartLabels[0]=temp;
      this.mainChartLabels = _mainChartLabels;
      // Data Randomize
      let _mainChartData: Array < number > = [];
      let _mainChartData2: Array < number > = [];
      let _mainChartData3: Array < number > = [];
      for (let i = 0; i <= this.mainChartElements; i++) {
        _mainChartData.push(this.random(10, 1200));
        _mainChartData2.push(this.random(10, 1200));
        _mainChartData3.push(this.random(10, 1200));
      }
      this.mainChartData = [{
        data: _mainChartData,
        label: '방문 시간(초)'
      }];
      this.mainChart2Data = [{
        data: _mainChartData2,
        label: '방문 시간(초)'
      }];
      this.mainChart3Data = [{
        data: _mainChartData3,
        label: '방문 시간(초)'
      }];
    },2000)
  }

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {
    this.pieChartDataControl();
    
    this.mainChartDataControl();
  }
}

