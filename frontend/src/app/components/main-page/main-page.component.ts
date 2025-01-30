import { Component } from '@angular/core';
import { CategoriesComponent } from "../categories/categories.component";
import { PropertyListComponent } from "../properties/property-list/property-list.component";

@Component({
  selector: 'app-main-page',
  imports: [CategoriesComponent, PropertyListComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
