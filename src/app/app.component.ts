import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
  <mat-toolbar color="primary">
    <mat-toolbar-row>
      <span>BMC Poland</span>
    </mat-toolbar-row>
  </mat-toolbar>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app';
}
