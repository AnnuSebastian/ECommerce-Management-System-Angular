import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepartmentComponent } from './Departments/list-department/list-department.component';
import { AddDepartmentComponent } from './Departments/add-department/add-department.component';
import { ListEmployeeComponent } from './Employees/list-employee/list-employee.component';
import { AddEmployeeComponent } from './Employees/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './Employees/update-employee/update-employee.component';
import { UpdateDepartmentComponent } from './Departments/update-department/update-department.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { authguardGuard } from './Auth/authguard.guard';

const routes: Routes = [
  {path: 'departments', component:ListDepartmentComponent, canActivate:[authguardGuard]},
  {path: 'departments/add', component:AddDepartmentComponent, canActivate:[authguardGuard]},
  {path: 'employees', component:ListEmployeeComponent, canActivate:[authguardGuard]},
  {path: 'employees/add', component:AddEmployeeComponent, canActivate:[authguardGuard]},
  {path: 'employees/edit/:id',component:UpdateEmployeeComponent, canActivate:[authguardGuard]},
  {path: 'departments/edit/:id',component:UpdateDepartmentComponent, canActivate:[authguardGuard]},
  {path: '', component:LoginComponent},
  {path: 'registration',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
