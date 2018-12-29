import { Component, OnInit } from '@angular/core';
import { MoviesQuery } from '../store/queries';
import { MovieService } from '../services';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../store/models';
import { take } from 'rxjs/operators';

@Component({
	selector: 'app-movie',
	template: `<div>

	<p class="link link-simple" (click)="backToCategory()">👈 Back to current category</p>
	<ng-container *ngIf="isLoading$ | async; else content">
		<div class="loader"></div>
	</ng-container>
	<ng-template #content>
		<app-error-message *ngIf="error$|async as error" [error]="error"></app-error-message>
		<app-movie-detail *ngIf="movie" [movie]="movie"></app-movie-detail>
	</ng-template>
	</div>`
})

export class MovieComponent implements OnInit {
	movie: Movie;
	error$: Observable<Error>;
	isLoading$: Observable<boolean>;

	constructor(
		private moviesQuery: MoviesQuery,
		private movieService: MovieService,
		private router: Router
	) {
		const subscrib = this.moviesQuery.currentMovie$.pipe(take(2)).subscribe(movie => { this.movie = movie; console.log("sub", subscrib); });
		this.error$ = this.moviesQuery.selectError();
		this.isLoading$ = this.moviesQuery.selectLoading();
	}

	backToCategory() {
		if (this.movie) {
			this.router.navigate([`category/${this.movie.categoryId}`]);
		}
	}

	ngOnInit() {
		this.movieService.setCurrentMovieDetails().pipe(take(1)).subscribe();
	}
}
