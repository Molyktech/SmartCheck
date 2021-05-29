import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-main-nav',
  templateUrl: './dashboard-main-nav.component.html',
  styleUrls: ['./dashboard-main-nav.component.scss'],
})
export class DashboardMainNavComponent implements OnInit {
  @Output() openMenu = new EventEmitter<boolean>();
  @Input() navList: [];
  constructor() {}

  ngOnInit(): void {}
}
