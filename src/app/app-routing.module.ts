import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuraComponent } from './modules/cura/cura.component';

const routes: Routes = [
  { path: '', redirectTo: 'cura', pathMatch: 'full' },
  {
    path: '',
    component: CuraComponent,
    children: [
      {
        path: 'cura',
        loadChildren: () =>
          import('src/app/modules/cura/cura.module').then(m => m.CuraModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
