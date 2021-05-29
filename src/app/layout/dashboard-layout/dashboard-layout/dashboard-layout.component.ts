import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItems } from 'src/app/core/models/index';
import { DASHBOARD_MENU_ITEMS } from 'src/app/core/constants/index';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
  navList: MenuItems[] = DASHBOARD_MENU_ITEMS;
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor() {}

  ngOnInit(): void {}

  handleOpen(data) {
    this.sidenav.open();
  }

  handleClose(data) {
    this.sidenav.close();
  }
}
