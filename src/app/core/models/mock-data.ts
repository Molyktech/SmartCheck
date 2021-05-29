import {
  IHomeTableData,
  IStatsCount,
  IStatsServers,
  IStatsStatus,
} from './index';

export const DASHBOARD_STATUS_OVERVIEW: IStatsStatus = {
  stats: { all: 10, available: 6, critical: 4 },
  title: 'Application Status',
};

export const DASHBOARD_SERVER_OVERVIEW: IStatsServers = {
  stats: { active: 2, all: 4, inactive: 2 },
  title: 'Servers',
};

export const DASHBOARD_COUNT_OVERVIEW: IStatsCount = {
  count: 60,
  title: 'Health check counts',
};

export const HOME_TABLE_DATA: IHomeTableData[] = [
  {
    application: 'Application name goes here',
    servers: 3,
    lastModified: '11/1/2020 3:57:29 PM',
    status: 'healthy',
  },
  {
    application: 'Application name goes here',
    servers: 2,
    lastModified: '11/1/2020 3:57:29 PM',
    status: 'unhealthy',
  },
  {
    application: 'Application name goes here',
    servers: 2,
    lastModified: '11/1/2020 3:57:29 PM',
    status: 'healthy',
  },
  {
    application: 'Application name goes here',
    servers: 3,
    lastModified: '11/1/2020 3:57:29 PM',
    status: 'healthy',
  },
  {
    application: 'Application name goes here',
    servers: 3,
    lastModified: '11/1/2020 3:57:29 PM',
    status: 'healthy',
  },
];
