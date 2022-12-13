import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './core/components/account/login.component';
import { EmployeesComponent } from './core/components/hr/employees.component';
import { GenerateTokenComponent } from './core/components/hr/generatetoken.component';
import { ApplicationsComponent } from './core/components/hr/applications.component';

@NgModule({
  declarations: [
    LoginComponent,
    EmployeesComponent,
    GenerateTokenComponent,
    ApplicationsComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'applications', component: ApplicationsComponent },
      { path: '**', redirectTo: 'employees' },
    ]),
    CommonModule,
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}