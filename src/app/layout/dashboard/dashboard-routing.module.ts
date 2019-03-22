import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: '',
				redirectTo: 'inicio',
				pathMatch: 'full'
			},
			{
				path: 'inicio',
				loadChildren: 'app/layout/dashboard/inicio/inicio.module#InicioModule'
			},
			{
				path: 'indicadores',
				loadChildren: 'app/layout/dashboard/indicadores/indicadores.module#IndicadoresModule'
			},
			{
				path: 'reactive',
				loadChildren: 'app/layout/dashboard/reactive/reactive.module#ReactiveModule'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
