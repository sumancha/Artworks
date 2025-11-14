import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { ArtImage } from 'src/models/artImage';
import { selectCartItem, selectCartItemCount, selectCartTotalPrice } from './store/cart.select';
import { clearCart, removeItemFromCart } from './store/cart.action';

@Component({
  selector: 'art-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
     cartItems$: Observable<ArtImage[]>;
      cartTotalPrice$: Observable<number>;
      cartItemCount$: Observable<number>;
      constructor(private store: Store<AppState>) {
          // Initialize observables here using store selectors
      }
      ngOnInit() {
          this.cartItems$ = this.store.select(selectCartItem);
        this.cartTotalPrice$ = this.store.select( selectCartTotalPrice);
        this.cartItemCount$ = this.store.select(selectCartItemCount);
      }

     clearCart(): void {
        this.store.dispatch(clearCart());

      }

      removeItem(id: number): void {
        this.store.dispatch(removeItemFromCart({ id }));
      }

      onPurchase(cartItems:  ArtImage[] ): void {
        // Implement purchase logic here
        cartItems.forEach(item => console.log(item));
        alert('Purchase successful!');
        this.store.dispatch(clearCart());
      }
}
