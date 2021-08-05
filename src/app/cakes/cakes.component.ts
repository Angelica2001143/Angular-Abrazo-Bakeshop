import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  public cakes;

  products =[45,56,45,454,45]
  productOrder = [];
  

  
  constructor(private route: Router,private apiService:ApiService) { }

  ngOnInit(): void {
    this.loadCakeProducts();
  }

  addToCart(id:Number,productName:String,productPrice:Number){
    this.productOrder.push({name:productName,price:productPrice})
    Swal.fire('Added ...', 'Product succesfully added !', 'success');
  }

  loadCakeProducts(){
    let url = "http://172.16.32.26:8080/api/product/cake"
    this.apiService.getData(url).subscribe(
      result=>{
        this.cakes = result;
      }
    );

  }

}
