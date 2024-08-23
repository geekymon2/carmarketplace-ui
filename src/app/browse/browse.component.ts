import { Component } from '@angular/core';
import { FiltersComponent } from "./filters/filters.component";
import { ResultsComponent } from "./results/results.component";

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [FiltersComponent, ResultsComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {

}
