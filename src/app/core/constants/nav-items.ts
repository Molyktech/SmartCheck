import { MenuItems } from '../models';

export const DASHBOARD_MENU_ITEMS: MenuItems[] = [
  {
    name: 'Home',
    link: '/',
    index: 0,
    active: true,
    icon: 'home',
  },
  {
    name: 'Server',
    link: '/server',
    index: 1,
    active: true,
    icon: 'dns',
  },
  {
    name: 'Application',
    link: '/application',
    index: 2,
    active: true,
    icon: 'web_asset',
  },
];
