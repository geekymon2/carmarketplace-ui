import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getMakes().subscribe((response) => {
      this.data = response;
      console.log(this.data);
    });
  }
}
