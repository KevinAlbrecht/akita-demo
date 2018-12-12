import { OnInit, Component } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
	selector: 'app-category-detail',
	template: `
	<ng-container>
	{{(selectedMoviesState$|async).error}}
	</ng-container>
	<p class="link link-simple" (click)="goToCat()">< Back to categories</p>
	<ng-container *ngIf="!(selectedMoviesState$ | async).loading; else loader">
			<app-movies-list [movies]="(selectedMoviesState$ |async).data"></app-movies-list>
	</ng-container>
	<ng-template #loader>
		<div class="loader"></div>
	</ng-template>
	`
})
export class CategoryDetailComponent implements OnInit {

	selectedMoviesState$: Observable<any>;

	// Here I got two store because of sample app
	constructor(
	) { }

	goToCat() {
		// navigate with effect
		const payload = { path: [''] };
	}

	ngOnInit() {
	}
}
