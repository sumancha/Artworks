import { Component } from '@angular/core';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { CounterButtonComponent } from '../counter-button/counter-button.component';

@Component({
    selector: 'art-counter',
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css',
    imports: [CounterOutputComponent, CounterButtonComponent]
})
export class CounterComponent {

}
