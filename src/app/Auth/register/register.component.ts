import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!:FormGroup;

  constructor(private authSvc : AuthServiceService,
    private router : Router){}

  ngOnInit(): void {
    this.form = new FormGroup({
      id : new FormControl(0),
      userName : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.email, Validators.required]),
      password : new FormControl('', Validators.required),
      role : new FormControl(1,Validators.required) 
    });
  }

    submit(){
    this.authSvc.register(this.form.value).subscribe(result=>{
      console.log(result);
      alert('Registered Successfully');
      this.router.navigate(['']);
    },err=>{
      alert('ERROR');
      console.log('ERROR')
    });
  }

}
