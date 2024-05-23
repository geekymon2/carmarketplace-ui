import { Component } from '@angular/core';
import { StatusMessageService } from '../common/statusmessage.service';

@Component({
  selector: 'app-status-bar',
  standalone: true,
  imports: [],
  templateUrl: './status-bar.component.html',
  styleUrl: './status-bar.component.css',
})
export class StatusBarComponent {
  constructor(public message: StatusMessageService) {}
}
