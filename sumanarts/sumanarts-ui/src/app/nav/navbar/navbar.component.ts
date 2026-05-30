import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartItemCount } from 'src/app/artwork/cart/store/cart.select';
import { AppState } from 'src/app/state/app.state';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe } from '@angular/common';
 

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [
        RouterLink,
        RouterLinkActive,
        AsyncPipe,
    ],
})
export class NavbarComponent {
    cartItemCount$: Observable<number>;
   constructor(private store: Store<AppState>) {
             // Initialize observables here using store selectors
         }
         ngOnInit() {
              this.cartItemCount$ = this.store.select(selectCartItemCount);
         }
}
