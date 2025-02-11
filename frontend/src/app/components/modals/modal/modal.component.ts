import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  @Input() label!: string;
  @Input() isOpen!: boolean;

  ngOnInit(): void {

  }
}
