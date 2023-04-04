import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  tableData = [
    {
      time: '12:43:01 pm',
      date: '10/09/2022',
      phone: '07038485738',
      complaint: 'Pharmacy',
      rate: 3.2,
      nps: 7,
      status: 'Resolved',
      active: false,
    },
    {
      time: '10:03:29 am',
      date: '15/09/2022',
      phone: '07008899873',
      complaint: 'Laboratory',
      rate: 1.0,
      nps: 3,
      status: 'In-Progress',
      active: false,
    },
    {
      time: '07:20:51 pm',
      date: '17/09/2022',
      phone: '07078869849',
      complaint: 'Emergency Unit',
      rate: 3.5,
      nps: 5,
      status: 'Open',
      active: false,
    },
    {
      time: '03:24:27 pm',
      date: '17/02/2022',
      phone: '07038485738',
      complaint: 'Cash/Account',
      rate: 1.0,
      nps: 2,
      status: 'In-Progress',
      active: false,
    },
  ];

  viewComplaint(item: any): void {
    this.tableData.forEach(data => data.active = false);
    item.active = true;
  }
}
