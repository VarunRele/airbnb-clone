import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { SearchComponent } from "../search/search.component";
import { UsernavComponent } from "../usernav/usernav.component";
import { AddPropertyButtonComponent } from "../add-property-button/add-property-button.component";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage, SearchComponent, UsernavComponent, AddPropertyButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
}
