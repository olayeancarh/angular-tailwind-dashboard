import { Component } from '@angular/core';

@Component({
  selector: 'app-cura',
  template: `
    <div class="w-full flex flex-col min-h-screen bg-[#F5F5F5]">
      <app-sidebar></app-sidebar>
      <app-main></app-main>
    </div>
  `,
})
export class CuraComponent {}
