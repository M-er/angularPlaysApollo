import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DashboardService {

	constructor() {
		this.onSidenavToggle.subscribe(() => {
			this.isSnavOpened = !this.isSnavOpened;
		});
	}

	isSnavOpened = false;

	onSidenavToggle: EventEmitter<any> = new EventEmitter<any>();

}
