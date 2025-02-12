import { Component } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { LoginModalService } from '../../../services/login-modal.service';
import { CustomButtonComponent } from "../../forms/custom-button/custom-button.component";

@Component({
  selector: 'app-login-modal',
  imports: [ModalComponent, CustomButtonComponent],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
  constructor(public loginModalService: LoginModalService) {}

  loginSubmit(): void {
    console.log('loginSubmit');
  }
}
