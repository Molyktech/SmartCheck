import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-mobile-nav',
  templateUrl: './dashboard-mobile-nav.component.html',
  styleUrls: ['./dashboard-mobile-nav.component.scss'],
})
export class DashboardMobileNavComponent implements OnInit {
  @Output() openMenu = new EventEmitter<boolean>();
  @Input() navList: [];
  constructor() {}

  ngOnInit(): void {}
}
