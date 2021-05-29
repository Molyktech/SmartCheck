import { MenuItems } from '../models';

export const DASHBOARD_MENU_ITEMS: MenuItems[] = [
  {
    name: 'Home',
    link: '/',
    index: 0,
    isActive: true,
    icon: 'home',
  },
  {
    name: 'Server',
    link: '/server',
    index: 1,
    isActive: true,
    icon: 'dns',
  },
  {
    name: 'Application',
    link: '/application',
    index: 2,
    isActive: true,
    icon: 'web_asset',
  },
];
