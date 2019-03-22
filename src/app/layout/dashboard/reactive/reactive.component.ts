import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import * as dayjs from 'dayjs';
import { UtilService } from '@app/core';

@Component({
	selector: 'tr-reactive',
	templateUrl: './reactive.component.html',
	styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

	constructor(
		private fb: FormBuilder,
		private utilService: UtilService
	) { }

	form: FormGroup;

	resultados = [
		{ label: 'Hola', value: 'hola' },
		{ label: 'Chau', value: 'chau' }
	];

	@ViewChild('formulario') formElement: NgForm;

	default = {
		nombre: '',
		fecha: dayjs(),
		check: false,
		autocomplete: '',
		value: null
	};

	ngOnInit() {
		this.form = this.fb.group({
			nombre: new FormControl(this.default.nombre, [Validators.required]),
			fecha: new FormControl(this.default.fecha),
			check: new FormControl(this.default.check),
			autocomplete: new FormControl(this.default.autocomplete),
			value: new FormControl(this.default.value)
		});
	}

	onSubmit(event) {
		console.log(this.utilService.formatDates(this.form));
	}

	reset() {
		console.log(this.formElement);
		this.formElement.resetForm(this.default);
	}
}
