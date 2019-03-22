import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.guard';
import { NotFoundComponent } from './layout/not-found';

/*[
	{ path: '', pathMatch: 'full', redirectTo: '/home' },
	{ path: 'home', component: HomeComponent }
]*/

const routes: Routes = [
	{
		path: '',
		canActivate: [AuthGuard],
		loadChildren: 'app/layout/dashboard/dashboard.module#DashboardModule'
	},
	{
		path: 'login',
		loadChildren: 'app/layout/login/login.module#LoginModule'
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
