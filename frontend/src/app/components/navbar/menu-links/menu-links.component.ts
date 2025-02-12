import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-links',
  imports: [],
  templateUrl: './menu-links.component.html',
  styleUrl: './menu-links.component.css'
})
export class MenuLinksComponent {
  @Input() label!: string;
  @Output() onClick = new EventEmitter<void>();

  handleClick(): void {
    this.onClick.emit();
  }
}
