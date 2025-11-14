import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.store";

export const selectCartState = createFeatureSelector<CartState>('cart');

export  const selectCartItem = createSelector(
    selectCartState, (state: CartState) => state.items
);
export const selectCartTotalPrice = createSelector(
    selectCartState, (state: CartState) => state.totalPrice
);  

export const selectCartItemCount = createSelector(
    selectCartState, (state: CartState) => state.items.length
);  