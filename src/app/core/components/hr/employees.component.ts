import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-employees',
  templateUrl: './employees.component.html',
})
export class EmployeesComponent implements OnInit {
  constructor(private http: HttpClient) {}

  employees: Array<Employee> = [];

  getEmployees() {
    this.http
      .get('http://localhost:8080/employee-service/api/all-employees')
      .subscribe((response) => {
        for (let key in response) {
          this.employees.push(
            new Employee(
              response[key].firstName + ' ' + response[key].lastName,
              response[key].id,
              response[key].email,
              response[key].cellPhone,
              'true'
            )
          );
        }
      });
  }

  ngOnInit() {
    this.getEmployees();
  }
}

class Employee {
  name: string;
  id: string;
  email: string;
  phone: string;
  active: string;

  constructor(name, id, email, phone, active) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.phone = phone;
    this.active = active;
  }
}
