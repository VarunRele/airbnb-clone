import { Component } from '@angular/core';
import { PropertyListItemComponent } from "../property-list-item/property-list-item.component";

@Component({
  selector: 'app-property-list',
  imports: [PropertyListItemComponent],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {

}
