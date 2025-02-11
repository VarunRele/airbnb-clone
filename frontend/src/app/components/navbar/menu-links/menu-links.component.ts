import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-links',
  imports: [],
  templateUrl: './menu-links.component.html',
  styleUrl: './menu-links.component.css'
})
export class MenuLinksComponent {
  @Input() label!: string;

  onClick() {
    console.log(this.label)
  }
}
