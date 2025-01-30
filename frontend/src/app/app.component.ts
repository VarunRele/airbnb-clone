import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar/navbar.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { PropertyListComponent } from "./components/properties/property-list/property-list.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CategoriesComponent, PropertyListComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
