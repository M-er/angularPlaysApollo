import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilService } from '@app/core';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
		private utilService: UtilService,
		private router: Router
	) { }

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return new Promise(resolve => {
			// Llamada al backend
			if (!!this.utilService.getLS('user', true)) {
				resolve(true);
			} else {
				localStorage.removeItem('user');
				this.router.navigateByUrl('/login');
				resolve(false);
			}
		})
	}
}
