import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {

  constructor(public db: AngularFireDatabase) { 
    this.db.object('/test/').update({
      test : "test"
    })
  }

}
