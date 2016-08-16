import { Routes, RouterModule } from '@angular/router';

import { AutoCompleteComponent } from  './components/autocomplete.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AutoCompleteComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
