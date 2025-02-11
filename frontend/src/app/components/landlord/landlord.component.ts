import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ContactButtonComponent } from "../contact-button/contact-button.component";
import { PropertyListComponent } from "../properties/property-list/property-list.component";

@Component({
  selector: 'app-landlord',
  imports: [NgOptimizedImage, ContactButtonComponent, PropertyListComponent],
  templateUrl: './landlord.component.html',
  styleUrl: './landlord.component.css'
})
export class LandlordComponent {

}
