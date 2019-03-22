import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from '@tres-erres/ngx-utils';

/* Material Modules */
import {
	MatButtonModule,
	MatInputModule,
	MatCardModule,
	MatProgressSpinnerModule,
	MatTooltipModule,
	MatSnackBarModule,
	MatDialogModule,
	MatToolbarModule,
	MatIconModule,
	MatCheckboxModule,
	MatSelectModule,
	MatTableModule,
	MatFormFieldModule,
	MatRadioModule,
	MatSidenavModule,
	MatListModule,
	MatMenuModule
} from '@angular/material';

/** Modules */


/** Directives */
import { FocusNextDirective } from './focus-next.directive';

import { HttpService } from '@app/core';

import { ComponentesModule, HttpService as ComponentesHttpService } from '@componentes/.';

import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
/* Apollo */
		HttpClientModule,
		ApolloModule,
		HttpLinkModule, 
		/* Custom Modules */
		ComponentesModule,

		/* Material Modules */
		MatFormFieldModule,
		MatButtonModule,
		MatInputModule,
		MatCardModule,
		MatProgressSpinnerModule,
		MatTooltipModule,
		MatSnackBarModule,
		MatDialogModule,
		MatToolbarModule,
		MatIconModule,
		MatCheckboxModule,
		MatSelectModule,
		MatTableModule,
		MatRadioModule,
		MatSidenavModule,
		MatListModule,
		MatMenuModule,

		UtilsModule
	],
	declarations: [
		/* Directives */
		FocusNextDirective,

	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,

		/* Custom Modules */
		ComponentesModule,
		UtilsModule,

		/* Material Modules */
		MatFormFieldModule,
		MatButtonModule,
		MatInputModule,
		MatCardModule,
		MatProgressSpinnerModule,
		MatTooltipModule,
		MatSnackBarModule,
		MatDialogModule,
		MatToolbarModule,
		MatIconModule,
		MatCheckboxModule,
		MatSelectModule,
		MatTableModule,
		MatRadioModule,
		MatSidenavModule,
		MatListModule,
		MatMenuModule,

		/** Directives */
		FocusNextDirective,


	],
	entryComponents: [

	],
	providers: [
		{
			provide: APOLLO_OPTIONS,
			useFactory: (httpLink: HttpLink) => {
				return {
					cache: new InMemoryCache(),
					link: httpLink.create({
						uri: "http://localhost:4000"
					})
				}
			},
			deps: [HttpLink]
		},
		{ provide: ComponentesHttpService, useClass: HttpService }
	]
})
export class SharedModule { }
