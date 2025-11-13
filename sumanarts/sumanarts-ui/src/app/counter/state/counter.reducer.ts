import { Action, createReducer, on } from "@ngrx/store";
import { Counter } from "../../../models/counter";
import { initalState } from "./counter.state";
import { decrement, increment, reset } from "./counter.action";

const _counterReducer = createReducer(
    initalState,
    on(increment, (state) => { return { ...state, count: state.count + 1 } }),
    on(decrement, (state) => { return { ...state, count: state.count - 1 } }),
    on(reset, (state) => { return { ...state, count: 0 } })
);  

export function counterReducer(state:Counter, action: Action<string>) {
return _counterReducer(state, action);
    }   