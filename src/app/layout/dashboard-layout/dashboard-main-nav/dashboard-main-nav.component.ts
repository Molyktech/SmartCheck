import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItems } from 'src/app/core/models';

@Component({
  selector: 'app-dashboard-main-nav',
  templateUrl: './dashboard-main-nav.component.html',
  styleUrls: ['./dashboard-main-nav.component.scss'],
})
export class DashboardMainNavComponent implements OnInit {
  @Output() openMenu = new EventEmitter<boolean>();
  @Input() navList: MenuItems[];
  @ViewChild('tabs', { static: false }) tabs;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      this.setActiveTab(event);
    });
  }

  open() {
    this.openMenu.emit(true);
  }

  setActiveTab(event): void {
    if (event instanceof NavigationEnd) {
      console.log('setting active states');
      let activeLinkIndex = this.navList.indexOf(
        this.navList.find((tab) => tab.link === event.url)
      );

      this.navList.forEach((link, index: number) => {
        link.isActive = index === activeLinkIndex;
        console.log(`${link.link} is now ${link.isActive}`);
      });
    }
  }
}
