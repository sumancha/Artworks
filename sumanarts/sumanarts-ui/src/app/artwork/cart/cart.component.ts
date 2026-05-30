import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { ArtImage } from 'src/models/artImage';
import { selectCartItem, selectCartItemCount, selectCartTotalPrice } from './store/cart.select';
import { clearCart, removeItemFromCart } from './store/cart.action';
import { NgIf, NgFor, AsyncPipe, CurrencyPipe } from '@angular/common';
import { ButtonDirective, Button } from 'primeng/button';

@Component({
    selector: 'art-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    imports: [NgIf, ButtonDirective, NgFor, Button, AsyncPipe, CurrencyPipe]
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
