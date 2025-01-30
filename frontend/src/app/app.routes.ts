import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageComponent } from './components/properties/page/page.component';
import { PropertyListComponent } from './components/properties/property-list/property-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    {path: 'properties/:id', component: PageComponent}
  ];
