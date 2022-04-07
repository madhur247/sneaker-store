import { CartItem } from "../cart/models/cart-item";

export class Customer {
  emailId: string = ''; // logged In Customer
  cartItems: CartItem[] = []; // stores cart info of products added to the cart
  orders: string[] = []; // stores order Id's
}
