import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-list',
  template: `
  <mat-list>
  <h3 mat-subheader>Registered Users:</h3>
  <mat-list-item *ngFor="let account of accounts">
    <mat-icon mat-list-icon>folder</mat-icon>
    <h4 mat-line>{{account.name}}</h4>
    <p mat-line> {{account.email}} </p>
  </mat-list-item>

</mat-list>

  `,
  styles: []
})
export class ListComponent implements OnInit {

  public accounts;

  constructor() { }

  ngOnInit() {
    const ref = firebase.database().ref('/accounts');
    ref.on( 'value', result => this.accounts = this.toArray(result.val()));
  }

  private toArray(obj): any[] {
    const arr = [];
    Object.keys(obj).forEach(key => {
      arr.push(obj[key]);
    });
    return arr;
  }

}
