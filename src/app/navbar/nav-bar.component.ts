import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  isLoggedIn = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem('isLoggedIn');
    this.loginService.loginStatusChanged.subscribe((status: boolean) => {
      this.isLoggedIn = status;
    });
  }

  onLogout() {
    this.loginService.logout();
  }
}
