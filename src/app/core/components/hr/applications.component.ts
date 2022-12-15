import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-applications',
  templateUrl: './applications.component.html',
})
export class ApplicationsComponent {
  constructor(private http: HttpClient) {}

  applications: Array<Application> = [];

  getApplications() {
    this.http
      .get('http://localhost:8080/application-service/workflows')
      .subscribe((response) => {
        for (let key in response) {
          this.applications.push(
            new Application(
              response[key].applicationWorkflowId,
              response[key].employeeId,
              response[key].createDate,
              response[key].lastModificationDate,
              response[key].status
            )
          );
        }
      });
  }

  ngOnInit() {
    this.getApplications();
  }
}

class Application {
  applicationId: string;
  employeeId: string;
  creationDate: string;
  modificationDate: string;
  status: string;

  constructor(
    applicationId,
    employeeId,
    creationDate,
    modificationDate,
    status
  ) {
    this.applicationId = applicationId;
    this.employeeId = employeeId;
    this.creationDate = creationDate;
    this.modificationDate = modificationDate;
    this.status = status;
  }
}
