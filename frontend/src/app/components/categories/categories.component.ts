import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [NgOptimizedImage],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories = ['Beach', 'Villas', 'Cabins', 'Tiny homes']
}
