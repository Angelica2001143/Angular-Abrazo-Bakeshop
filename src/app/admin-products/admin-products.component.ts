import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  public products;

  constructor() { }

  ngOnInit(): void {
  }

  // delete(product){
  //   // const index= this.cartItems.findIndex(item => item.id == product.id)
  //   // this.cartItems.splice(index,1)
  //   Swal.fire('Deleted...', 'Product succesfully Deleted !', 'warning');

  // }

}
