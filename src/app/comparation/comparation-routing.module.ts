import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComparationComponent } from './components/comparation/comparation.component';
import { BillComponent } from './components/bill/bill.component';


const routes: Routes = [
	{
		path: '',
		component: ComparationComponent
	},
	{
		path: 'bill',
		component: BillComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ComparationRoutingModule { }
