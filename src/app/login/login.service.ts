import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginStatusChanged = new Subject<boolean>();

  constructor() { }

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    this.loginStatusChanged.next(true);
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.loginStatusChanged.next(false);
  }

}
