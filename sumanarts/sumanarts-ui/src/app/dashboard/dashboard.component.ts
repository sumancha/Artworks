import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../layouts/nav/navbar/navbar.component';
import { TOKEN_KEY } from 'src/costant';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';

import { HideIfClaimsNotMetDirective } from '../directives/hide-if-claims-not-met.directive';
import { claimReq } from '../shared/utils/claimReq-utils';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [HideIfClaimsNotMetDirective, ReactiveFormsModule],
})
export class DashboardComponent implements OnInit {
  /**
   *
   */
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
  ) {}
  adminPhotoImportFormgrp!: FormGroup;
  claimReq = claimReq;
  fullName: string = '';
  ngOnInit(): void {
    this.adminPhotoImportFormgrp = new FormGroup({
      imageInput: new FormControl(),
    });

    this.userService.getUserProfile().subscribe({
      next: (res: any) => {
        this.fullName = res.fullName;
      },
      error: (err: any) => {
        console.log('error while retrieving user');
      },
    });
  }

  saveImage(event: any) {}
  onChange(event: any) {}
}
