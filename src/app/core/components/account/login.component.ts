import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  loginUser() {
    console.log('jfoiadsfjoas');
    this.http
      .post('http://localhost:8090/authentication-service/login', {
        username: (<HTMLInputElement>document.getElementById('inputUsername'))
          .value,
        password: (<HTMLInputElement>document.getElementById('inputPassword'))
          .value,
      })
      .subscribe((response) => {
        if (response['accessToken']) {
          localStorage.setItem('accessToken', response['accessToken']);
        }
      });
  }

  ngOnInit() {
    if (localStorage.getItem('accessToken')) {
      this.router.navigate(['employees']);
    }
  }
}
