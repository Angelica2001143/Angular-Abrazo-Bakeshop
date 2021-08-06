import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  user: any = FormGroup;
  submitted = false;
  

  constructor(  
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router :Router) { }
  
  ngOnInit(): void {

    this.user = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      phonenumber: ['', [Validators.required, Validators.minLength(9)]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', Validators.required]
    }, {
      validator: this.MustMatch('password', 'confirmpassword')
    });
  }

  get f() { return this.user.controls; }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        //return if another validator has already found an error on the matchingcontrol
     
        return;
      }

      //set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      }else {
        matchingControl.setErrors(null);
      }
    }
  }

mydata: any;

  url = "http://172.16.32.26:8000/api/register";

  spinner = true;
  onSubmit() {
    this.submitted = true;
    //stop here if form is invalid

    this.spinner = false;
    if (this.user.invalid) {
      return;
    }

    console.warn(this.user.value);
    this.http.post(this.url, this.user.value).subscribe(data=> {
    this.mydata = data;

    Swal.fire({
      text: 'You Register Successfully!',
      icon: 'success'
    });

    console.log(data);
    this.router.navigate(['/log'])
    }
    , errors=>{
      // alert("Username is already existing!");
      Swal.fire('Oops...', 'Something went wrong!', 'error')
      console.log(errors.error.errors);
    });
  }
}

