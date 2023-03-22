import { Component } from '@angular/core';
import {FormControl,FormGroup,FormArray,FormControlName,FormBuilder, Validators} from '@angular/forms';
import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';
  // user: FormGroup;
  submitted = false;
 public user!:any;
  constructor(private formBuilder: FormBuilder) { 
     this.user = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ['', [Validators.email]],
      password: ['', [Validators.required]], 
      confirmpassword: ['', [Validators.required]],
      // 'address':this.formBuilder.array([
      //   's'
      // ])
    },
    {
      validator: ConfirmPasswordValidator("password", "confirmpassword")
    }
    );
  }

  get firstName(){
    return this.user.get('firstName');
  }
  get lastName(){
    return this.user.get('lastName');
  }
  get email(){
    return this.user.get('email');
  }
  get password(){
    return this.user.get('password');
  }
  get confirmpassword(){
    return this.user.get('confirmpassword');
  }
  // get firstName(){
  //   return this.user.get('firstName');
  // }
  loginUser(){
    console.log(this.user);
  console.log(this.user.value);
  this.submitted=true;
  }
}
