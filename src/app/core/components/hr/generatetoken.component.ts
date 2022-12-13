import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-token-generator',
  templateUrl: './generatetoken.component.html',
})
export class GenerateTokenComponent {
  constructor(private http: HttpClient) {}

  tokenRequestOutput: string =
    'Type in email and then the generate token button to create a new registration token';

  generateNewToken() {
    const email: string = (<HTMLInputElement>(
      document.getElementById('inputEmail')
    )).value;

    this.http
      .get('http://localhost:8090/authentication-service/newtoken/' + email)
      .subscribe((response) => {
        this.tokenRequestOutput =
          response['message'] +
          ' || Registration Token: ' +
          response['registrationToken'];
      });
  }
}
