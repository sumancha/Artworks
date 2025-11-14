import { createAction, props } from "@ngrx/store";
import { ArtImage } from "src/models/artImage";

     export const addItemToCart = createAction(
      '[Cart] Add Item To Cart',
      props<{ item: ArtImage }>()
    );
       export const removeItemFromCart = createAction(
      '[Cart] Remove Item From Cart',
      props<{ id: number }>()
    );
   export const clearCart = createAction('[Cart] Clear Cart');

