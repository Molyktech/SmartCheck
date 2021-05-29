import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from 'src/app/layout/dashboard-layout/dashboard-layout/dashboard-layout.component';
import { DashboardLayoutModule } from 'src/app/layout/dashboard-layout/dashboard-layout.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./pages/dashboard/dashboard.module').then(
                (mod) => mod.DashboardModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
    DashboardLayoutModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
