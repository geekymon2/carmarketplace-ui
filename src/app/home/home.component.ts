import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SearchComponent]
})
export class HomeComponent {

}
