import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Department } from 'src/app/Departments/department';
import { DepartmentService } from 'src/app/Departments/department.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  list : Employee[] = []; //Initialised an array to store the list of Employees
  deptArray! : Department[];
  private EmployId =0;

  constructor(private empService : EmployeeService,
    private deptService : DepartmentService){}

  ngOnInit(): void {
    this.empService.getList().subscribe(result=>{
      console.log(result);
      this.list=result;
    },err=>{
      alert('ERROR');
    })
  }

  getGender(gen:number):string{
    if(gen==1){
      return 'female'
    }
    else{
      return 'male'
    }
  }


  delete(){
    console.log('employee to delete:' + this.EmployId);
    this.empService.delete(this.EmployId).subscribe(()=>{
      alert('delete successful');
      this.ngOnInit(); // this will refresh the same list after deletion
        }, err=>{
      console.log(err);
      alert('error');
    })
  }

  setEmployeeId(id:number){
    this.EmployId=id;
  }

}
