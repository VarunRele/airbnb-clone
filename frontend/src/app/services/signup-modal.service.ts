import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupModalService {
  public isOpen = false;

  close(): void {
    this.isOpen = false;
  }

  open(): void {
    this.isOpen = true;
  }

  constructor() { }
}
