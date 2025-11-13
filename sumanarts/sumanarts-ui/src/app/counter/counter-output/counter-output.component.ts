import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { Observable } from 'rxjs';
import { Counter } from '../../../models/counter';
import { getCounter } from '../state/counter.select';

@Component({
  selector: 'art-counter-output',
  standalone: false,
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent {
  counter$ !:Observable<number>
constructor(private store:Store<AppState>) { }

ngOnInit(): void {
  this.counter$=this.store.select(getCounter);  }

}
