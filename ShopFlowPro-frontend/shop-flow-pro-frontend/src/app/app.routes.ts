import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { MechanicsComponent } from './mechanics/mechanics.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CreateServiceOrderComponent } from './create-service-order/create-service-order.component';
import { ServiceListComponent } from './service-list/service-list.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search', component: SearchComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mechanics', component: MechanicsComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'create-new-service-order', component: CreateServiceOrderComponent },
  { path: 'service-list', component: ServiceListComponent },



];
