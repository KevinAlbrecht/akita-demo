import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiError } from '../store/models/api-error.model';

@Component({
	selector: 'app-error-message',
	template: `<div class="error-message">{{error.message}}</div>
	`
})

export class ErrorMessageComponent implements OnInit {
	constructor() { }

	@Input()
	error: ApiError;

	ngOnInit() {
	}
}
