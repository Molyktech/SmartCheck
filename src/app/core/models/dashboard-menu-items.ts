export class MenuItems {
  name: string;
  link: string;
  isActive = true;
  index?: number;
  icon?: string;
  children?: MenuItems[];
}
