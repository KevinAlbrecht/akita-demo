import { OnInit, Component } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { MoviesQuery } from '../store/queries/movies.query';
import { Movie } from '../store/models/movie.model';
import { MovieService } from '../services';

@Component({
	selector: 'app-category-detail',
	template: `
	{{error$|async|json}}
	<p class="link link-simple" (click)="goToCat()">< Back to categories</p>
	<ng-container *ngIf="movies$ | async; else loader">
			<app-movies-list [movies]="movies$ |async"></app-movies-list>
	</ng-container>
	<ng-template #loader>
		<div class="loader"></div>
	</ng-template>
	`
})
export class CategoryDetailComponent implements OnInit {

	movies$: Observable<Movie[]>;
	error$: Observable<Error>;

	// Here I got two store because of sample app
	constructor(
		private moviesQuery: MoviesQuery,
		private movieService: MovieService
	) {
		this.movies$ = this.moviesQuery.moviesByCategoryId$;
		this.error$ = this.moviesQuery.selectError();
	}

	goToCat() {
		// navigate with effect
		const payload = { path: [''] };
	}

	ngOnInit() {
		this.movieService.setMoviesByCategoryId().subscribe();
	}
}
