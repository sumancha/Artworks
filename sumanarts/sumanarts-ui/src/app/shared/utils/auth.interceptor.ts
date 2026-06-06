import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const tostr = inject(ToastrService);

  if (authService.isLoggedIn()) {
    const cloneReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        'Bearer ' + authService.getToken(),
      ),
    });
    return next(cloneReq).pipe(
      tap({
        error: (err: any) => {
          if (err.status === 401) {
            authService.deleteToken();
            setTimeout(() => {
              tostr.info('Please login to continue', 'Session Expired');
            }, 1500);
            router.navigate(['/login']);
          } else if (err.status === 403) {
            tostr.error(
              'You do not have permission to perform this action',
              'Forbidden',
            );
            router.navigate(['/forbidden']);
          }
        },
      }),
    );
  } else {
    return next(req);
  }
};
