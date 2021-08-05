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
  public cartAvailable;

  products =[45,56,45,454,45]
  productOrder = [];

  constructor(private route: Router,private apiService:ApiService) { }

  ngOnInit(): void {
    this.loadPastriesProduct();
    this.getAvailableCart();
  }

  addToCart(id,name,price){
    if(!this.cartAvailable){
      console.log("Created New Cart")
      let url = "http://172.16.32.26:8080/api/create-cart";
      this.apiService.getData(url).subscribe(result=>{  
        let data  = {
          productId:id,
          cartId:result['id'],
          productName:name,
         price:price
        };
        this.addItemsToCart(data)
        Swal.fire('Added ...', 'Product succesfully added !', 'success');
        this.getAvailableCart();
      });
    }else{
      console.log("Used the available cart");
      let data  = {
        productId:id,
        cartId:this.cartAvailable.id,
        productName:name,
        price:price
      };
      this.addItemsToCart(data)
      Swal.fire('Added ...', 'Product succesfully added !', 'success');
    }
  }

  loadPastriesProduct(){
    let url = "http://172.16.32.26:8080/api/product/pastries"
    this.apiService.getData(url).subscribe(
      result=>{
        this.pastries = result;
      }
    );
  }

  getAvailableCart(){
    let url = "http://172.16.32.26:8080/api/get-cart"
    this.apiService.getData(url).subscribe(
      result=>{
       this.cartAvailable  = result;
      }
    );
  }

  addItemsToCart(data){
    let url = "http://172.16.32.26:8080/api/add-to-cart"
    this.apiService.saveData(url,data).subscribe(
      result=>{
        console.log(result);
      },error =>{
        console.log(error);
      });

  }

}
