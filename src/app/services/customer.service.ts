import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { CartItem } from '../cart/models/cart-item';
import { Customer } from '../models/Customer';
import { CustomerDetails } from '../models/Customer-Details';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private _customer = new BehaviorSubject(new Customer());

  get customer$(): Observable<Customer> {
    return this._customer.asObservable();
  }

  get customer(): Customer {
    return this._customer.getValue();
  }

  constructor(
    private _authService: AuthService,
    private _utilityService: UtilitiesService,
    private _snackBar: MatSnackBar
  ) {
    if (!localStorage.getItem('customers')) {
      localStorage.setItem('customers', JSON.stringify([] as Customer[]));
    }

    this._authService.loggedInUser$.subscribe((user) =>
      this.InitializeCustomer(user.email)
    );
  }

  public addToCart(cartItem: CartItem) {
    const c_customer = { ...this.customer };
    if (this._authService.isLoggedIn) {
      c_customer.cartItems.push(cartItem);
      this.updateCustomer(c_customer);
      this._snackBar.open('Added to cart', 'dismiss', { duration: 2000 });
    } else {
      this._authService.askToLogin();
    }
  }

  public removeFromCart(cartItem: CartItem) {
    if (this._authService.isLoggedIn) {
      const c_customer = { ...this.customer };
      const index = this.customer.cartItems.findIndex(
        (c) => c.productId === cartItem.productId
      );
      c_customer.cartItems.splice(index, 1);
      this.updateCustomer(c_customer);
      this._snackBar.open('Removed from cart', 'dismiss', { duration: 2000 });
    } else {
      this._authService.askToLogin();
    }
  }

  public updateCartItem(cartItem: CartItem) {
    const c_customer = { ...this.customer };
    if (this._authService.isLoggedIn) {
      const index = this.customer.cartItems.findIndex(c => c.productId === cartItem.productId);
      c_customer.cartItems.splice(index, 1);
      c_customer.cartItems.push(cartItem);
      this.updateCustomer(c_customer);
      this._snackBar.open('Cart item updated', 'dismiss', { duration: 2000 });
    } else {
      this._authService.askToLogin();
    }
  }

  public createOrder() {
    this.customer.cartItems = [] as CartItem[];
    this.updateCustomer(this.customer);
    this._snackBar.open('Order placed', 'dismiss', { duration: 2000 });
  }

  private InitializeCustomer(email: string) {
    if (this._authService.isLoggedIn) {
      const stream = localStorage.getItem('customers');
      if (stream) {
        const customers = JSON.parse(stream) as Customer[];
        const index = customers.findIndex((c) => c.emailId === email);

        if (index === -1) {
          const customer = new Customer();
          // customer does not already exist
          customer.emailId = email;
          this.updateCustomer(customer);
        } else {
          // customer exists, set customer obj
          this._customer.next({
            ...(customers.find((c) => c.emailId === email) as Customer),
          });
        }
      }
    } else {
      this._customer.next(new Customer());
    }
  }

  private updateCustomer(customerToUpdate: Customer) {
    const stream = localStorage.getItem('customers') as string;
    const customers = JSON.parse(stream) as Customer[];
    const index = customers.findIndex(
      (c) => c.emailId === customerToUpdate.emailId
    );
    if (index !== -1) {
      customers.splice(index, 1);
      customers.push(customerToUpdate);
    } else {
      customers.push(customerToUpdate);
    }
    localStorage.setItem('customers', JSON.stringify(customers));
    this._customer.next(customerToUpdate);
  }
}
