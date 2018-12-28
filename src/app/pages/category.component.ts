import { OnInit, Component } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { MoviesQuery } from '../store/queries/movies.query';
import { Movie } from '../store/models/movie.model';
import { MovieService } from '../services';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
	selector: 'app-category',
	template: `
	<p class="link link-simple" (click)="goToCat()">👈 Back to categories</p>
	<ng-container *ngIf="isLoading$ | async; else content">
		<div class="loader"></div>
	</ng-container>
	<ng-template #content>
		<app-error-message *ngIf="error$|async as error" [error]="error"></app-error-message>
			<app-movies-list (selectMovie)="goToMovieDetail($event)"  [movies]="movies$ | async"></app-movies-list>
	</ng-template>
	`
})
export class CategoryComponent implements OnInit {

	movies$: Observable<Movie[]>;
	error$: Observable<Error>;
	isLoading$: Observable<boolean>;

	// Here I got two store because of sample app
	constructor(
		private moviesQuery: MoviesQuery,
		private movieService: MovieService,
		private router: Router
	) {
		this.movies$ = this.moviesQuery.moviesByCategoryId$;
		this.error$ = this.moviesQuery.selectError();
		this.isLoading$ = this.moviesQuery.selectLoading();
	}

	goToCat() {
		// navigate with effect
		this.router.navigate(['']);
	}

	goToMovieDetail(movieId: number) {
		this.router.navigate([`movie/${movieId}`]);
	}

	ngOnInit() {
		this.movieService.setMoviesByCategoryId().pipe(take(1)).subscribe();
	}
}
