import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageComponent } from './components/properties/page/page.component';
import { PropertyListComponent } from './components/properties/property-list/property-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LandlordComponent } from './components/landlord/landlord.component';
import { MyReservationsComponent } from './components/my-reservations/my-reservations.component';
import { MyPropertiesComponent } from './components/my-properties/my-properties.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { ConversationDetailComponent } from './components/inbox/conversation-detail/conversation-detail.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'properties/:id', component: PageComponent },
    { path: 'landlord/:id', component: LandlordComponent },
    { path: 'my-reservations', component: MyReservationsComponent },
    { path: 'my-properties', component: MyPropertiesComponent },
    { path: 'inbox', component: InboxComponent },
    { path: 'conversation/:id', component: ConversationDetailComponent },
    { path: 'properties', redirectTo: '/' },
    { path: '**', redirectTo: '/' }
  ];
