import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorMessageService {
  errorMessage!: string;

  displayError(errorMessage: string) {
    this.errorMessage = errorMessage;
  }
}
