import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartItemCount } from 'src/app/artwork/cart/store/cart.select';
import { AppState } from 'src/app/state/app.state';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';
import { claimReq } from 'src/app/shared/utils/claimReq-utils';
import { HideIfClaimsNotMetDirective } from 'src/app/directives/hide-if-claims-not-met.directive';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [
    RouterLink,
    RouterLinkActive,
    AsyncPipe,
    RouterLink,
    HideIfClaimsNotMetDirective,
  ],
})
export class NavbarComponent {
  cartItemCount$: Observable<number>;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthService,
  ) {
    // Initialize observables here using store selectors
  }
  ngOnInit() {
    this.cartItemCount$ = this.store.select(selectCartItemCount);
  }
  claimReq = claimReq;
  onLogout() {
    this.authService.deleteToken();
    this.router.navigateByUrl('/signin');
  }
}
