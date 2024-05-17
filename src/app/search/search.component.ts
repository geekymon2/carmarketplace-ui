import { Component, OnInit } from '@angular/core';
import { CarInfoDataService, Make } from '../../data/data.carinfo.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { Observable } from 'rxjs';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgSelectModule, FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  make$!: Observable<Make[]>;
  selectedMakeId = '1';

  constructor(private dataService: CarInfoDataService) {}

  ngOnInit() {
    this.make$ = this.dataService.getMakes();
  }
}