import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-token-generator',
  templateUrl: './generatetoken.component.html',
})
export class GenerateTokenComponent {
  constructor(private http: HttpClient) {}

  generateNewToken() {
    const email: string = (<HTMLInputElement>(
      document.getElementById('inputEmail')
    )).value;

    this.http
      .get('http://localhost:8090/authentication-service/newtoken/' + email)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
