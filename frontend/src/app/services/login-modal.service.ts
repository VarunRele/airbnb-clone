import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginModalService {
  public isOpen = false;

  close(): void {
    this.isOpen = false;
  }
  
  open(): void {
    this.isOpen = true;
  }
}
