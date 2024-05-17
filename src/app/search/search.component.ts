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
  data: any;
  make$!: Observable<Make[]>;
  selectedMakeId = '1';
  simpleItems = [];

  constructor(private dataService: CarInfoDataService) {}

  ngOnInit() {
    this.make$ = this.dataService.getMakes();    
    //this.make$ = Observable['option 1','option 2','option 3','option 4'];

    this.dataService.getMakes().subscribe((response) => {
      this.data = response;
      //this.make$ = this.data;
      console.log(this.data);
    });
  }

}