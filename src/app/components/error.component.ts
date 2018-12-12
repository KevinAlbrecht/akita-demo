import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-error',
	template: `<div class="error-message" *ngIf="error$|async as error; else loader">{{error.error}}</div>
	<ng-template #loader>
		<div class="loader"></div>
	</ng-template>`
})

export class ErrorComponent implements OnInit {
	constructor() { }
	error$: Observable<Error>;

	ngOnInit() {
	}
}
