import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../iproducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit{
  
  cart: Iproducts[] = [];
  total : number = 0;
  fee : number = 0;
  discount: number = 0;

  constructor(private cartService: CartService){}

ngOnInit(): void {
  this.cart = this.cartService.getCart();
  this.total = this.cartService.calculateTotal();
  this.fee = this.cartService.calculateFee();
  this.discount = this.cartService.calculateDiscount();
}

}
