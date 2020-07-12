import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/table/products.component';
import { ProductsDetailComponent } from './components/products/products-detail/products-detail.component';
import { DetailUserComponent } from './components/users/detail-user/detail-user.component';
import { TableUserComponent } from './components/users/table-user/table-user.component';
import { DetailOrderComponent } from './components/orders/detail-order/detail-order.component';
import { TableOrderComponent } from './components/orders/table-order/table-order.component';

import { ProductsAdminGuard } from '@core/guards/products-admin.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
	},
	{
		path: 'home',
		redirectTo: 'products',
	},
	{
		path: 'products',
		component: ProductsComponent
	},
	{
		path: 'products/:id', canActivate: [ProductsAdminGuard],
		component: ProductsDetailComponent
	},
	{
		path: 'orderns',
		component: TableOrderComponent
	},
	{
		path: 'orderns/:id',
		component: DetailOrderComponent
	},
	{
		path: 'users',
		component: TableUserComponent
	},
	{
		path: 'users/:id',
		component: DetailUserComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
