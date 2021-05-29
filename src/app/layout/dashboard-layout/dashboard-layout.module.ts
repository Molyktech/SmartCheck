import { NgModule } from '@angular/core';

import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardToolbarComponent } from './dashboard-toolbar/dashboard-toolbar.component';
import { DashboardMainNavComponent } from './dashboard-main-nav/dashboard-main-nav.component';
import { DashboardMobileNavComponent } from './dashboard-mobile-nav/dashboard-mobile-nav.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardToolbarComponent,
    DashboardMainNavComponent,
    DashboardMobileNavComponent,
  ],
  imports: [SharedModule],
})
export class DashboardLayoutModule {}
