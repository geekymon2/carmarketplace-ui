import { Component, OnInit } from '@angular/core';
import {
  BodyType,
  CarInfoDataService,
  Make,
  Model,
} from '../../data/data.carinfo.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
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
  models$!: Observable<Model[]>;
  bodytypes$!: Observable<BodyType[]>;
  selectedMake = '';
  selectedModel = '';
  selectedBodyType = '';

  constructor(private carInfoService: CarInfoDataService) {}

  ngOnInit() {
    this.fetchCarMakes();
    this.fetchBodyTypes();
  }

  fetchCarMakes() {
    this.make$ = this.carInfoService.getMakes();
  }

  fetchBodyTypes() {
    this.bodytypes$ = this.carInfoService.getBodyTypes();
  }

  fetchCarModels(make: string, type: string) {
    if (make.length > 1) {
      this.models$ = this.carInfoService.getModels(make, type);
    }
  }

  selectMake(selection: string) {
    this.selectedMake = selection;
    this.fetchCarModels(this.selectedMake, this.selectedBodyType);
  }

  selectBodyType(selection: string) {
    this.selectedBodyType = selection;    
    this.fetchCarModels(this.selectedMake, this.selectedBodyType);
  }
}
