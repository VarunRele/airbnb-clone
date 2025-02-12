import { Component } from '@angular/core';
import { MenuLinksComponent } from "../menu-links/menu-links.component";
import { LoginModalService } from '../../../services/login-modal.service';
import { LoginModalComponent } from "../../modals/login-modal/login-modal.component";

@Component({
  selector: 'app-usernav',
  imports: [MenuLinksComponent, LoginModalComponent],
  templateUrl: './usernav.component.html',
  styleUrl: './usernav.component.css'
})
export class UsernavComponent {
  isOpen: boolean = false;

  constructor(public loginModalService: LoginModalService) {}

  setIsOpen(open: boolean) {
    this.isOpen = open
  }

  handleClick(fnc: Function): void {
    // console.log(fnc);
    // fnc();
    this.setIsOpen(false);
  }
}
