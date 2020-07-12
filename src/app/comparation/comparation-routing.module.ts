import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComparationComponent } from './components/comparation/comparation.component';
import { AllInOneComponent } from './components/all-in-one/all-in-one.component';


const routes: Routes = [
	{
		path: '',
		component: ComparationComponent
	},
	{
		path: '/all-in-one',
		component: AllInOneComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ComparationRoutingModule { }
