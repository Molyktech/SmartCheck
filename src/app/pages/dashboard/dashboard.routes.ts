import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { ApplicationComponent } from './application/application.component';

export const DASHBOARD_ROUTES: Routes = ([] = [
  { path: '', component: HomeComponent },
  { path: 'server', component: ServerComponent },
  { path: 'application', component: ApplicationComponent },
]);
