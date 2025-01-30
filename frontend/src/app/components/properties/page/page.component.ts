import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ReservationSidebarComponent } from "../reservation-sidebar/reservation-sidebar.component";

@Component({
  selector: 'app-page',
  imports: [NgOptimizedImage, ReservationSidebarComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

}
