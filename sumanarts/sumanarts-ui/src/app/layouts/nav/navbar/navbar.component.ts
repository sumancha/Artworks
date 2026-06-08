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
import { UserService } from 'src/app/shared/services/user.service';

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
    private userService: UserService,
  ) {
    // Initialize observables here using store selectors
  }

  claimReq = claimReq;
  fullName: string = '';
  userRole: string = '';
  ngOnInit() {
    this.cartItemCount$ = this.store.select(selectCartItemCount);

    this.userService.getUserProfile().subscribe({
      next: (res: any) => {
        this.fullName = res.fullName;

        console.log('Full Name:', this.fullName);
      },
      error: (err: any) => {
        console.log('error while retrieving user');
      },
    });
    const claims = this.authService.getClaims();
    // console.log('claims in navbar:', claims);
    this.userRole = claims.role;
  }

  onLogout() {
    this.authService.deleteToken();
    this.router.navigateByUrl('/login');
  }
}
