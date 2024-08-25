import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { UserDataService } from '../../data/data.user.service';
import { NotificationService } from '../../data/notification.service';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css',
})
export class ForgotpasswordComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
  });
  submitted = false;
  res$!: Observable<any>;
  errorDetails: string[] | null = null;

  constructor(
    private fb: FormBuilder,
    private userDataService: UserDataService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
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

    this.res$ = this.userDataService.validateEmail(this.form.value);
    this.res$.subscribe({
      next: () => {
        this.notificationService.sendResetEmail();
      },
      error: (err: any) => {
        this.errorDetails = err.details;
      },
    });
  }
}
