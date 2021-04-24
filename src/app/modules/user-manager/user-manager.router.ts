import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserManagerComponent } from './components/user-manager/user-manager.component';

const routes: Routes = [
  { path: '', component: UserManagerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagerRouter { }
