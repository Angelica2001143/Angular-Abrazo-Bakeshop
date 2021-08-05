import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.css']
})
export class PastriesComponent implements OnInit {

  public pastries;
  products =[45,56,45,454,45]
  productOrder = [];

  constructor(private route: Router,private apiService:ApiService) { }

  ngOnInit(): void {
    this.loadPastriesProduct();
  }

  addToCart(id:Number,productName:String,productPrice:Number){
    this.productOrder.push({name:productName,price:productPrice})
    Swal.fire('Added ...', 'Product succesfully added !', 'success');
  }

  loadPastriesProduct(){
    let url = "http://172.16.32.26:8080/api/product/pastries"
    this.apiService.getData(url).subscribe(
      result=>{
        this.pastries = result;
      }
    );
  }

}
