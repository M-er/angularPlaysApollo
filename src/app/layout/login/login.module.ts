import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		LoginComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: '', component: LoginComponent }]),
		SharedModule,
	]
})
export class LoginModule { }
