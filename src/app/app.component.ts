import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { NavBarComponent } from './navbar/nav-bar/nav-bar.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    SearchComponent,
    StatusBarComponent,
    SignupComponent,
    NavBarComponent,
  ],
})
export class AppComponent {
  title = 'carmarketplace-ui';
}
