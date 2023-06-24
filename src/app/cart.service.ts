import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Iproducts[] = [];

  constructor() { }

  addToCart(obj: Iproducts) {
    this.cart.push(obj);
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }

  calculateTotal() {
    let total: number = 0;
    for (let val of this.cart) {
      total = total + val.price;
    }
    return total;
  }

  calculateFee() {
    let total: number = 0;
    let fee: number = 0;

    for (let val of this.cart) {
      total = total + val.price;
    }

    fee = total + (total * 0.1); 

    return fee;
  }

  calculateDiscount() {
    let total: number = 0;
    let fee: number = 0;
    let discount: number = 0;

    for (let val of this.cart) {
      total = total + val.price;
    }

    fee = total + (total * 0.1); 
    discount = fee - (fee * 0.15); 

    return discount;
  }
}