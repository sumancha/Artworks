import { Counter } from "../../models/counter";
import { counterReducer } from "../counter/state/counter.reducer";
import { postReducer } from "../posts/state/post.reducet";
import { PostState } from "../posts/state/post.state";

 

 

export interface AppState {
    counter: Counter;
      posts:PostState;
}

export const appReducer = {
      posts:postReducer,
    counter:counterReducer
};