import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
//Suman note This will nav link if user does not have required claims, used in html element
@Directive({
  selector: '[appHideIfClaimsNotMet]',
  standalone: true,
})
export class HideIfClaimsNotMetDirective implements OnInit {
  @Input('appHideIfClaimsNotMet') claimReq!: Function;

  constructor(
    private authService: AuthService,
    private elemRef: ElementRef,
  ) {}
  ngOnInit(): void {
    const claims = this.authService.getClaims();
    console.log('claims:', claims);
    if (!this.claimReq(claims)) {
      this.elemRef.nativeElement.style.display = 'none';
    }
  }
}
