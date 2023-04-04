export interface Menu {
  name: string;
  svg?: string;
  url?: string;
  submenu?: Menu[]
  active: boolean;
}
