import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public id;
  public cartItems;



  constructor(private route: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getAvailableCart();
    console.log(this.cartItems)
  }


  
  getAvailableCart(){
    let url = "http://172.16.32.26:8080/api/get-cart"
    this.apiService.getData(url).subscribe(
      result=>{
        this.id  = result['id'];
        this.loadCartItems(result['id']);
      }
    );
  }

  loadCartItems(id){
    let url = `http://172.16.32.26:8080/api/get-cart-items/${id}`
    this.apiService.getData(url).subscribe(
      result=>{
        console.log(result)
       this.cartItems  = result;
      }
    );
  }


  checkout(){
    let url = `http://172.16.32.26:8080/api/checkout-cart/${this.id}`
    this.apiService.getData(url).subscribe();
    this.route.navigate(['/breads'])
  }
  

  sumTotal(){
    let total = 0
    this.cartItems.forEach(item => {
        total = total + item.price
    });
    return total;
  }


}
