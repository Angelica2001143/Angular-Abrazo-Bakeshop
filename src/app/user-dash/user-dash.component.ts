import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {


  @Input() productOrderBread =[];
  @Input() productOrderCake = [];
  @Input() productOrderPastries =[];

  public overallProductOrder;

  constructor(private route: Router,
    private apiService: ApiService) { }

  ngOnInit(): void {
  }

  showProductOrder(){
    this.route.navigate(['/cart'])
  }

}
