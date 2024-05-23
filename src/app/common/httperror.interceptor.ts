import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { StatusMessageService } from './statusmessage.service';
import { inject } from '@angular/core';

export const httperrorInterceptor: HttpInterceptorFn = (req, next) => {
  const status = inject(StatusMessageService);
  console.debug('Http request has been intercepted.');
  return next(req).pipe(
    catchError((err) => {
      if (err instanceof HttpErrorResponse) {
        status.setStatusMessage('Server Error');
      }
      return of(err);
    })
  );
};
