import { Component, OnInit } from '@angular/core';
import {
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
  selectedMakeId = '1';
  selectedModelId = '1';

  constructor(private carInfoService: CarInfoDataService) {}

  ngOnInit() {
    this.fetchCarMakes();
    this.fetchCarModels();
  }

  fetchCarMakes() {
    this.make$ = this.carInfoService.getMakes();
  }

  fetchCarModels() {
    this.models$ = this.carInfoService.getModels('FORD');
  }
}
