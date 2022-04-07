import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';
import { CARTITEMSMOCK } from '../mock/cart-items.mock';
import { CartItem } from '../models/cart-item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  loading: boolean = true;
  get cartItems(): CartItem[] {
    return this._cartService.cartItems;
  };

  constructor(public _cartService: CartService, public _authService: AuthService, private _customerService: CustomerService) { }

  ngOnInit(): void {
    this._cartService.getSummary();
    this.loading = false;
  }

  public placeOrder() {
    this._customerService.createOrder()
  }

}
