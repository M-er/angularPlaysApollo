import { Component, OnInit, ViewChildren, QueryList, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { UtilService, HttpService } from '@app/core';
import { Router } from '@angular/router';
import { FocusNextDirective } from '@app/shared';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, AfterViewInit {

	constructor(
		private router: Router,
		private httpService: HttpService,
		private utilService: UtilService
	) { }

	user = '';
	password = '';
	showPass = false;
	@ViewChildren(FocusNextDirective) focusElements: QueryList<FocusNextDirective>;

	ngOnInit() {
		if (!!this.utilService.getLS('user', true)) {
			this.router.navigateByUrl('/');
		}
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this.focusElements.first.focus();
		});
	}

	reset() {
		this.user = '';
		this.password = '';
	}

	login() {
		/*this.httpService.post('login', {'user': this.user, 'password': this.password}).then((data) => {
			if (data.success) {*/
				this.utilService.setLS('user', { name: this.user }, true);
				this.router.navigateByUrl('/');
			/*}
		});*/
	}

}
