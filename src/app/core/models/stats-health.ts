import { listToMap } from '../helpers/utils';
export interface IStatsStatus {
  stats: IDefaultStats;
  title: string;
}

export interface IStatsServers {
  title: string;
  stats: IDefaultStats;
}

export interface IStatsCount {
  count: number;
  title: string;
}

export interface IDefaultStats {
  all?: number;
  active?: number;
  inactive?: number;
  available?: number;
  critical?: number;
}

export interface ILookUp {
  value: string;
  background?: string;
  color?: string;
  borderColor?: string;
}

export const STATSCOLOR: ILookUp[] = [
  {
    value: 'all',
    background: '#ffffff',
    borderColor: '#1B1464',
    color: '#1B1464',
  },
  {
    value: 'available',
    background: '#24C977',
    borderColor: '#24C977',
    color: '#ffffff',
  },
  {
    value: 'critical',
    background: '#FF4343F7',
    borderColor: '#FF4343F7',
    color: '#ffffff',
  },
  {
    value: 'active',
    background: '#24C977',
    borderColor: '#24C977',
    color: '#ffffff',
  },
  {
    value: 'inactive',
    background: '#E0B237',
    borderColor: '#E0B237',
    color: '#ffffff',
  },
];

export const STATS_LOOKUP: { [key: string]: ILookUp } = listToMap(
  STATSCOLOR,
  'value'
);
