import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  user: any = FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router :Router
  ) { }

  ngOnInit(): void {
    this.user = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      
      
      password: ['',[Validators.required, Validators.minLength(5)]]
   
    });
  }

  get f() { return this.user.controls; }


mydata: any;

  url = "http://172.16.32.26:8000/api/login";

  spinner = true;
  onSubmit() {
    this.submitted = true;
    //stop here if form is invalid

    this.spinner = false;
    if (this.user.invalid) {
      return;
    } 


    console.log('SSUCESSS');
    

    console.warn(this.user.value);
    this.http.post<any>(this.url, this.user.value).subscribe(data=> {
    this.mydata = data;


    console.log(data);
    

    if(data.logincredential.usertype == 'admin') {
      this.router.navigate(['/products'])
    }else {


      this.router.navigate(['/breads'])
    }
    }
    , errors=>{
      // alert("Username is already existing!");
      Swal.fire('Oops...', 'Something went wrong!', 'error')
      console.log(errors.error.errors);
    });
  }
}
