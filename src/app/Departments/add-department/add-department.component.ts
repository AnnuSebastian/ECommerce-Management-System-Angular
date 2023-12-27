import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit{
    departments: any;
    add(arg0: string) {
        throw new Error('Method not implemented.');
    }
    name(name: any) {
        throw new Error('Method not implemented.');
    }

  form!:FormGroup;

  constructor(private deptService:DepartmentService,
    private router:Router){}

    ngOnInit(): void {
    //initialize form
    this.form = new FormGroup({ //FormGroup maps HTML Form
      id : new FormControl(0), //Form Control maps individual inputs
      name : new FormControl('', Validators.required)
    })

}

    submit(){
      console.log(this.form.value);
      this.deptService.add(this.form.value).subscribe(result=>{ //calls the add() method of the service class
      alert('added successfully');
      this.router.navigate(['/departments']);//after submit navigate to departments page
    },err=>{
      alert('ERROR');
      console.log(err);
    })
    }

}
