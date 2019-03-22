import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		InicioComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild([{ path: '', component: InicioComponent }])
	]
})
export class InicioModule { }
