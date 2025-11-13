import { Component } from '@angular/core';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../state/counter.action';

@Component({
  selector: 'art-counter-button',
  standalone: false,
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {
  constructor(private store:Store<AppState>) { }

  onIncrease() {
    this.store.dispatch(increment());
  }
  onDecrease() {
    this.store.dispatch(decrement());

  } 
  onReset() {
    this.store.dispatch({type:'reset'});
  } 

}
