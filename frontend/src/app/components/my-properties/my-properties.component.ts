import { Component } from '@angular/core';
import { PropertyListComponent } from "../properties/property-list/property-list.component";

@Component({
  selector: 'app-my-properties',
  imports: [PropertyListComponent],
  templateUrl: './my-properties.component.html',
  styleUrl: './my-properties.component.css'
})
export class MyPropertiesComponent {

}
