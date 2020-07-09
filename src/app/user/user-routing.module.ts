import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
	{
		path: '', canActivate: [ AuthGuard ],
		component: ProfileComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
