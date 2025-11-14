import { createReducer, on } from "@ngrx/store";
import { initialState } from "./cart.store";
import { addItemToCart, clearCart, removeItemFromCart } from "./cart.action";

const _cartReducer = createReducer(initialState,
on(addItemToCart, (state, { item }) => {
    const existingItem = state.items.find(i => i.id === item.id);
    if (existingItem) {
        return state; // Item already in cart, no changes
    }   else{
        return {
        ...state,
        items: [...state.items, item],
        totalPrice: state.totalPrice + (item.price || 0)    
        }
    
    }
}),
on(removeItemFromCart, (state, { id }) => {
    const itemToRemove = state.items.find(i => i.id === id);
    if (!itemToRemove) {
        return state; // Item not found in cart, no changes
    }
    return {       
        ...state,
        items: state.items.filter(i => i.id !== id ),
        totalPrice: state.totalPrice - (itemToRemove.price || 0)    
                                             }
}), 
on(clearCart, (state) => ({
    ...state,
    items: [],
    totalPrice: 0
})  )
);

export function cartReducer(state , action) {

    return _cartReducer(state, action);
}   