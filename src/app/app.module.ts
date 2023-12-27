//this is the main module of the application. If you import this module in any other file you can get the
//components associated within

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDepartmentComponent } from './Departments/add-department/add-department.component';
import { ListDepartmentComponent } from './Departments/list-department/list-department.component';
import { UpdateDepartmentComponent } from './Departments/update-department/update-department.component';
import { AddEmployeeComponent } from './Employees/add-employee/add-employee.component';
import { ListEmployeeComponent } from './Employees/list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './Employees/update-employee/update-employee.component';
import { LoginComponent } from './Auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RegisterComponent } from './Auth/register/register.component';
import { TokenInterceptor } from './Auth/token.interceptor';
import { HttpClientTestingModule } from '@angular/common/http/testing';


@NgModule({
  declarations: [ //each component gets automatically registered and imported inside this parent module when we create each component
    AppComponent,//components or directives that can be used in the app
    AddDepartmentComponent,
    ListDepartmentComponent,
    UpdateDepartmentComponent,
    AddEmployeeComponent,
    ListEmployeeComponent,
    UpdateEmployeeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [ //other shared modules that provide functionalities in the app
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe,
  {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor,multi:true}], //Register services to be used in the app
  bootstrap: [AppComponent] //this is the entry point into the app that defines that should start first
})
export class AppModule { }
