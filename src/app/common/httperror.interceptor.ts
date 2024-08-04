import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { StatusMessageService } from './statusmessage.service';
import { inject } from '@angular/core';

export const httperrorInterceptor: HttpInterceptorFn = (req, next) => {
  const message = inject(StatusMessageService);
  console.debug('Http request has been intercepted.');
  return next(req).pipe(
    catchError((err) => {
      console.error(`An HTTP error has occurred: ${err.message}`);
      if (err instanceof HttpErrorResponse) {
        if (err.status == 0) {
          message.setStatusMessage('Unable to connect to server');
        }
      }
      return of(err);
    })
  );
};
