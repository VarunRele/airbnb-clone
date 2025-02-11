import { Component } from '@angular/core';
import { MenuLinksComponent } from "../menu-links/menu-links.component";

@Component({
  selector: 'app-usernav',
  imports: [MenuLinksComponent],
  templateUrl: './usernav.component.html',
  styleUrl: './usernav.component.css'
})
export class UsernavComponent {
  isOpen: boolean = true;
}
