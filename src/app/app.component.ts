import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tic Tac Toe';
  isAuthenticated = false;

  constructor() {
  }

  async ngOnInit(): Promise<void> {
    this.isAuthenticated = false;
  }

  async logout(): Promise<void> {
    // await this.authService.logout('/');
  }
}
