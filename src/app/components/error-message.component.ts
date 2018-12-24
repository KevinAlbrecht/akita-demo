import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiError } from '../store/models/api-error.model';

@Component({
	selector: 'app-error-message',
	template: `<div class="error-message"><span>{{error.message}}</span></div>`,
	styles: [`.error-message{background-color: rgb(255, 164, 164);border: solid 1px red;border-radius: 6px;text-align: center;}`]
})

export class ErrorMessageComponent implements OnInit {
	constructor() { }

	@Input()
	error: ApiError;

	ngOnInit() {
	}
}
