import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Iproducts } from '../iproducts';
import { products } from '../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product : Iproducts = {} as Iproducts;
  index : number = 0;

  constructor(private ActivatedRoute: ActivatedRoute, private cartService: CartService){}

  addToCart(){
    alert("your Product has been added to the cart!")
    this.cartService.addToCart(this.product);
  }
  

  ngOnInit():void{
    this.ActivatedRoute.params.subscribe((params: Params) => {
      this.index = Number(params['id']);
      this.product = products[this.index];
      //console.log(this.product);
      
    });
  }


}
