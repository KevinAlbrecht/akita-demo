import { OnInit, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesQuery } from '../store/queries/movies.query';
import { Movie } from '../store/models/movie.model';


@Component({
	selector: 'app-category-detail',
	template: `
	<p class="link link-simple" (click)="goToCat()">< Back to categories</p>
	<ng-container *ngIf="selectedMoviesState$ | async; else loader">
			<app-movies-list [movies]="selectedMoviesState$ |async"></app-movies-list>
	</ng-container>
	<ng-template #loader>
		<div class="loader"></div>
	</ng-template>
	`
})
export class CategoryDetailComponent implements OnInit {

	movies$: Observable<Movie[]>;

	// Here I got two store because of sample app
	constructor(
		private moviesQuery: MoviesQuery
	) { }

	goToCat() {
		// navigate with effect
		const payload = { path: [''] };
	}

	ngOnInit() {
		this.movies$ = this.moviesQuery.moviesByCategoryId$;
	}
}
