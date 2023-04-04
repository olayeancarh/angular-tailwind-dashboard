import { Component } from '@angular/core';
import { Menu } from 'src/app/core/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  menuItems: Menu[] = [
    { name: 'Dashboard', svg: 'home', url: '/', active: true },
    {
      name: 'Feedback',
      svg: 'message',
      submenu: [
        { name: 'Configurations', url: '/', active: false },
        { name: 'Contacts', url: '/', active: false },
      ],
      active: false,
    },
    { name: 'Configurations', svg: 'config', url: '/', active: false },
    { name: 'Contacts', svg: 'contact', url: '/', active: false },
    { name: 'Reports', svg: 'report', url: '/', active: false },
    { name: 'Account Management', svg: 'account', url: '/', active: false },
  ];

  getSelectedMenu(menu: Menu) {
    this.menuItems.forEach((menu) => {
      menu.active = false;
    });
    menu.active = true;
  }
}
