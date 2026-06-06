import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import {
  animate,
  trigger,
  style,
  transition,
  query,
} from '@angular/animations';
import { TOKEN_KEY } from 'src/costant';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  animations: [
    trigger('routerFadeIn', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('1s ease-in-out', style({ opacity: 1 })),
          ],
          { optional: true },
        ),
      ]),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  constructor(
    public formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
  ) {}
  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      console.log(this.authService.isLoggedIn());
      this.router.navigateByUrl('/dashboard');
    }
  }

  isSubmitted: boolean = false;

  form = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.valid) {
      this.authService.signIn(this.form.value).subscribe({
        next: (res: any) => {
          this.authService.saveToken(res.token);
          //localStorage.setItem(TOKEN_KEY, res.token);
          this.router.navigateByUrl('/dashboard');
        },
        error: (err) => {
          if (err.status == 400) {
            this.toastr.error('Incorrect Login credential', 'Login Failed');
          } else {
            console.log('error during Login');
          }
        },
      });
    }
  }

  hasDisplayableError(controlName: string): Boolean {
    const control = this.form.get(controlName);
    return (
      Boolean(control?.invalid) &&
      (this.isSubmitted || Boolean(control?.touched) || Boolean(control?.dirty))
    );
  }
}
