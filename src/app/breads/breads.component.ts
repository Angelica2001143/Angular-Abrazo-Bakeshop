import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-breads',
  templateUrl: './breads.component.html',
  styleUrls: ['./breads.component.css']
})
export class BreadsComponent implements OnInit {

  public breads;
  public cartAvailable;

  productOrder = []
  

  constructor(
    private route: Router,
    private apiService: ApiService
    ) { }

  ngOnInit(): void {
    this.loadBreadProduct();
    this.getAvailableCart();
  }

  addToCart(id,name,price){
    if(!this.cartAvailable){
      console.log("Created New Cart")
      let url = "http://172.16.32.26:8000/api/create-cart";
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


  loadBreadProduct(){
    let url = "http://172.16.32.26:8000/api/product/bread"
    this.apiService.getData(url).subscribe(
      result=>{
        this.breads = result;
      }
    );
  }


  getAvailableCart(){
    let url = "http://172.16.32.26:8000/api/get-cart"
    this.apiService.getData(url).subscribe(
      result=>{
       this.cartAvailable  = result;
      }
    );
  }

  addItemsToCart(data){
    let url = "http://172.16.32.26:8000/api/add-to-cart"
    this.apiService.saveData(url,data).subscribe(
      result=>{
        console.log(result);
      },error =>{
        console.log(error);
      });

  }


}
