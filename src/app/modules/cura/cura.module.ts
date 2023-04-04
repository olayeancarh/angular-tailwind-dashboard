import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuraComponent } from './cura.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    CuraComponent,
    SidebarComponent,
    MainComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CuraModule { }
