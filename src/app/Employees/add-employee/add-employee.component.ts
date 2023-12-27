import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Department } from 'src/app/Departments/department';
import { DepartmentService } from 'src/app/Departments/department.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  form!:FormGroup;
  deptArray : Department []=[];
  

  constructor(private empService : EmployeeService, private deptService : DepartmentService,
    private router:Router){}

  ngOnInit(): void {
    this.form = new FormGroup({
      id : new FormControl(0),
      name : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.email,Validators.required]),
      gender : new FormControl(1, Validators.required),
      dateOfBirth : new FormControl('', Validators.required),
      mobileNo : new FormControl('',Validators.required),
      departmentId : new FormControl('',Validators.required),
      salary : new FormControl('',[Validators.required, Validators.min(1000)])

    })
    this.deptService.getList().subscribe(result=>{
      console.log(result);
      this.deptArray=result;
    },err=>{
      alert('ERROR');
    })
  }

  submit(){
    console.log(this.form.value);
    this.empService.add(this.form.value).subscribe(result=>{
      alert('Added Successfully');
      this.router.navigate(['/employees']);
    },err=>{
      alert('ERROR');
      console.log(err)
    })
  }
}
