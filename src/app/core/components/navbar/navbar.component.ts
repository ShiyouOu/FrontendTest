import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  accessToken;

  checkLogin() {
    this.accessToken = localStorage.getItem('accessToken');
  }

  logout() {
    this.accessToken = localStorage.removeItem('accessToken');
  }

  ngOnInit() {
    this.checkLogin();
  }
}
