import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnChanges {
  @Input() label!: string;
  @Input() isOpen!: boolean;
  @Output() close = new EventEmitter<void>();

  showModal = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if (changes['isOpen']) {
      this.showModal = changes['isOpen'].currentValue;
    }
  }

  handleClose(): void {
    this.showModal = false;
    setTimeout(() => {
      this.close.emit();
    }, 300);
  }
}
