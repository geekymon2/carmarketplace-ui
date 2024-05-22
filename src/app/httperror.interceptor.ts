import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { ErrorMessageService } from './errormessage.service';
import { inject } from '@angular/core';

export const httperrorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorMessageService);
  console.debug('Http intercepted');
  return next(req).pipe(
    catchError((err) => {
      if (err instanceof HttpErrorResponse) {
        errorService.displayError('Server Error');
      }
      return of(err);
    })
  );
};
