import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { UserDataService } from '../../data/data.user.service';
import { Observable } from 'rxjs';
import { NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;
  res$!: Observable<any>;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userDataService: UserDataService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.res$ = this.userDataService.authenticateUser(this.form.value);
    this.res$.subscribe({
      next: () => {
        console.info('Logged in successfully');
        this.loginService.login();
        this.router.navigate(['/home']);
      },
      error: (err: any) => {
        console.error(err);
        this.errorMessage = err.details[0].message;
      },
    });
  }
}
