import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

 users : any;

  constructor(
    private http : HttpClient
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  url = "http://172.16.32.26:8000/api/retrieve";
  getUser(){
    this.http.get(this.url).subscribe(response=>{
        this.users = response;
    })
  }


}
