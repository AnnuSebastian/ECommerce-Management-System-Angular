import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit{

  dept1! : Department;

  deptId : number=0;

  form! : FormGroup;

  constructor(private deptService : DepartmentService,
    private route : ActivatedRoute,
    private router : Router){}

  ngOnInit(): void {
    this.deptId = this.route.snapshot.params['id'];
    console.log(this.deptId);

    this.form = new FormGroup({
      id : new FormControl(0),
      name : new FormControl('',Validators.required)
    });

    this.deptService.getById(this.deptId).subscribe(result=>{
      console.log(result);
      this.dept1=result;

      this.form.setValue({
        id : this.dept1.id,
        name : this.dept1.name
      });
    },err=>{
      console.log(err);
      alert('ERROR');
    })
  }

  submit(){
    this.deptService.update(this.form.value).subscribe(()=>{
      alert('Updated Successfully');
      this.router.navigate(['/departments']);
    },err=>{
      console.log(err);
      alert('ERROR');
    })
  }

}
