import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  IStatsCount,
  IStatsServers,
  IStatsStatus,
  DASHBOARD_STATUS_OVERVIEW,
  DASHBOARD_SERVER_OVERVIEW,
  DASHBOARD_COUNT_OVERVIEW,
  IHomeTableData,
  HOME_TABLE_DATA,
} from 'src/app/core/models/index';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  getStatusOverview(): Observable<IStatsStatus> {
    return of(DASHBOARD_STATUS_OVERVIEW);
  }

  getServerOverview(): Observable<IStatsServers> {
    return of(DASHBOARD_SERVER_OVERVIEW);
  }

  getCountOverview(): Observable<IStatsCount> {
    return of(DASHBOARD_COUNT_OVERVIEW);
  }

  getStatsDetails(): Observable<IHomeTableData[]> {
    return of(HOME_TABLE_DATA);
  }
}
