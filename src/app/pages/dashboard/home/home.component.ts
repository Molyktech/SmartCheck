import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IHomeTableData,
  IStatsCount,
  IStatsServers,
  IStatsStatus,
} from 'src/app/core/models';
import { HomeService } from 'src/app/core/services/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  statusOverview$: Observable<IStatsStatus>;
  serverOverview$: Observable<IStatsServers>;
  countOverview$: Observable<IStatsCount>;
  statsHealthDetails$: Observable<IHomeTableData[]>;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.statusOverview$ = this.homeService.getStatusOverview();
    this.serverOverview$ = this.homeService.getServerOverview();
    this.countOverview$ = this.homeService.getCountOverview();
    this.statsHealthDetails$ = this.homeService.getStatsDetails();
  }
}
