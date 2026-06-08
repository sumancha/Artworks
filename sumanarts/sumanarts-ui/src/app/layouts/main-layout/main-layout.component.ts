import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
// import { claimReq } from 'src/app/shared/utils/claimReq-utils';
import { HideIfClaimsNotMetDirective } from 'src/app/directives/hide-if-claims-not-met.directive';
import { NavbarComponent } from '../nav/navbar/navbar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
  imports: [
    RouterOutlet,
    NavbarComponent,
    // RouterLink,
    // HideIfClaimsNotMetDirective,
  ],
})
export class MainLayoutComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}
}
