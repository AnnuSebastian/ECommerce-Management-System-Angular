import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Department } from 'src/app/Departments/department';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/Departments/department.service';
import { DatePipe } from '@angular/common';
import { Gender } from '../gender';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employ1! : Employee;

  employId : number = 0;

  form! : FormGroup;
  male!:Gender;
  female!:Gender;
  deptArray : Department[]=[];

  constructor(private empService : EmployeeService,
    private route: ActivatedRoute,
    private deptService : DepartmentService,
    private router : Router,
    private dtPipe : DatePipe){}
    
  ngOnInit(): void {
    this.male=Gender.male;
    this.female=Gender.Female;
    this.employId=this.route.snapshot.params['id'];
    console.log(this.employId);

    this.form = new FormGroup({
      id : new FormControl(0),
      name : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.email,Validators.required]),
      gender : new FormControl(''),
      dateOfBirth : new FormControl(''),
      mobileNo : new FormControl('',Validators.required),
      departmentId : new FormControl('',Validators.required),
      salary : new FormControl('',Validators.required)

    });

    this.deptService.getList().subscribe(result=>{
      this.deptArray=result;
    },err=>{
      alert(err);
    })

    this.empService.getById(this.employId).subscribe(result=>{
      console.log(result);
      this.employ1=result;

      this.form.setValue({
        id : this.employ1.id,
        name : this.employ1.name,
        email : this.employ1.email,
        gender : this.employ1.gender,
        dateOfBirth : this.dtPipe.transform(this.employ1.dateOfBirth, 'yyyy-MM-dd'),
        mobileNo : this.employ1.mobileNo,
        departmentId : this.employ1.departmentId,
        salary : this.employ1.salary
      });
    },err=>{
      alert('ERROR');
    })
  }
  
  submit(){
    this.empService.update(this.form.value).subscribe(()=>{
      console.log(this.form.value)
      alert('Updated Successfully');
      this.router.navigate(['/employees']);
    },err=>{
      alert('ERROR');
      console.log(err)
    })
  }

}

