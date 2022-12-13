import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { LoginComponent } from './core/components/account/login.component';
import { EmployeesComponent } from './core/components/hr/employees.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    EmployeesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
