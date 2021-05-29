export class MenuItems {
  name: string;
  link: string;
  active = true;
  index?: number;
  icon?: string;
  children?: MenuItems[];
}
