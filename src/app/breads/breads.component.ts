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

  productOrder = []
  

  constructor(
    private route: Router,
    private apiService: ApiService
    ) { }

  ngOnInit(): void {
    this.loadBreadProduct();
  }

  addToCart(id:Number,productName:String,productPrice:Number){
    this.productOrder.push({id:id,name:productName,price:productPrice});
    Swal.fire('Added ...', 'Product succesfully added !', 'success');
  }

  loadBreadProduct(){
    let url = "http://172.16.32.26:8080/api/product/bread"
    this.apiService.getData(url).subscribe(
      result=>{
        this.breads = result;
      }
    );
  }


}
