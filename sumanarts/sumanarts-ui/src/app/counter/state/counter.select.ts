import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Counter } from "../../../models/counter";

const getCounterState = createFeatureSelector<Counter>('counter');

export const getCounter=createSelector(
    getCounterState, (state:Counter)=>{return state.count}
);