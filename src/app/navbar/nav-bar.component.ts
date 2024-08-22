import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  mode: string | null = null;

  ngOnInit(): void {
    this.mode = localStorage.getItem('mode');
    console.info(this.mode);
  }
}
