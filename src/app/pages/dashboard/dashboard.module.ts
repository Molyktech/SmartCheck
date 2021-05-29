import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { ApplicationComponent } from './application/application.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DASHBOARD_ROUTES } from './dashboard.routes';
import { StatsCardComponent } from './home/widgets/stats-card/stats-card.component';
import { CountCardComponent } from './home/widgets/count-card/count-card.component';

@NgModule({
  declarations: [HomeComponent, ServerComponent, ApplicationComponent, StatsCardComponent, CountCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
  ],
})
export class DashboardModule {}
