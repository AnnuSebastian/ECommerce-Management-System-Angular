import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authSvc : AuthServiceService,
    private router : Router){}
  form! : FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      //name of elements hsould match the elements name in product.ts
      id : new FormControl(0),
      email : new FormControl('',[Validators.email, Validators.required]),
      password : new FormControl('', Validators.required),
      });
   
  }

  submit(){ // this is the method of the component class register. this method calls the service class method
    //register through injection
    this.authSvc.login(this.form.value).subscribe(result=>{
      console.log(result);
      alert('Successfully LoggedIn');
      //navigate to login
      this.router.navigate(['/employees']);
    },err=>{
      alert('ERROR');
      console.log('Error');
    });
    
  }

}
