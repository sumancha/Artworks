import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { Observable } from 'rxjs';
import { Counter } from '../../../models/counter';
import { getCounter } from '../state/counter.select';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'art-counter-output',
    templateUrl: './counter-output.component.html',
    styleUrl: './counter-output.component.css',
    imports: [AsyncPipe]
})
export class CounterOutputComponent {
  counter$ !:Observable<number>
constructor(private store:Store<AppState>) { }

ngOnInit(): void {
  this.counter$=this.store.select(getCounter);  }

}
