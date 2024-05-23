import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatusMessageService {
  message!: string;

  setStatusMessage(message: string) {
    this.message = message;
  }
}
