import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, of, throwError } from 'rxjs';
import { StatusMessageService } from './statusmessage.service';
import { inject } from '@angular/core';
import { ErrorModel } from './errormodel';

export const httperrorInterceptor: HttpInterceptorFn = (req, next) => {
  const message = inject(StatusMessageService);
  console.debug('Http request has been intercepted.');
  return next(req).pipe(
    catchError((err) => {
      console.error(
        `Failed connecting to: ${err.url} with error: ${err.message}`
      );
      if (err instanceof HttpErrorResponse) {
        if (err.status == 0) {
          message.setStatusMessage('Unable to connect to server');
        }
      }

      if (err.error.status == 500) {
        message.setStatusMessage('A server error has occured');
      }

      return throwError(
        () =>
          new ErrorModel(err.error.status, err.error.details, err.error.error)
      );
    })
  );
};
