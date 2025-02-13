import { Component } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { CustomButtonComponent } from "../../forms/custom-button/custom-button.component";
import { SignupModalService } from '../../../services/signup-modal.service';

@Component({
  selector: 'app-signup-modal',
  imports: [ModalComponent, CustomButtonComponent],
  templateUrl: './signup-modal.component.html',
  styleUrl: './signup-modal.component.css'
})
export class SignupModalComponent {
  constructor(public signupModalService: SignupModalService) { }

  SignUpSubmit(): void {
    console.log('Sign up submit');
  }

}
