import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})

@Injectable()
export class FullLayoutComponent implements OnInit {
  public accountKey: any;
  public account: any;
  private isAccept: boolean = false;
  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}

  constructor(public db: AngularFireDatabase){
    
  }

  login(id, password){
    this.db.list('/accounts/').subscribe((accounts)=>{
      accounts.forEach(account => {
        if(account.id == id && account.password == password){
          this.isAccept = true;
          this.account = account;
          return false;
        }
      });
    })
  }
}
