import { createReducer } from "@ngrx/store";
import { intitalState } from "./post.state";

const _postsReducer = createReducer(intitalState);

export function postReducer(state , action) {

    return _postsReducer(state, action);
}