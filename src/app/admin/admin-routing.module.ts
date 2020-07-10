import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'products',
		pathMatch: 'full',
	},
	{
		path: 'products',
		component: ProductsComponent
	},
	{
		path: 'products/:id',
		component: ProductsDetailComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
