import { Component } from '@angular/core';
import { ErrorMessageService } from '../common/errormessage.service';

@Component({
  selector: 'app-status-bar',
  standalone: true,
  imports: [],
  templateUrl: './status-bar.component.html',
  styleUrl: './status-bar.component.css',
})
export class StatusBarComponent {
  message: string = '';
  constructor(public errorMessage: ErrorMessageService) {}
}
