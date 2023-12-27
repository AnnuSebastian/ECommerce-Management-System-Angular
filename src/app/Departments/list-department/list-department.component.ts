import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../department';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit{

  list: Department[]=[];

  constructor(private deptService: DepartmentService){}

  ngOnInit(): void {
    this.deptService.getList().subscribe(result=>{
      this.list = result;
      console.log(result);
    },err=>{
      console.log(err);
    })
  }

}
