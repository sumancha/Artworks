import { Counter } from "../../models/counter";
import { CartState } from "../artwork/cart/store/cart.store";
import { counterReducer } from "../counter/state/counter.reducer";
import { postReducer } from "../posts/state/post.reducet";
import { PostState } from "../posts/state/post.state";
import { cartReducer } from "../artwork/cart/store/cart.reducer";

 

 

export interface AppState {
    counter: Counter;
      posts:PostState;
      cart:CartState;
}

export const appReducer = {
      posts:postReducer,
    counter:counterReducer,
    cart:cartReducer
};