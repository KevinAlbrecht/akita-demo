import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { MoviesState, MovieStore } from '../states';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie.model';
import { ApplicationRouterQuery } from './application-router.query';

@Injectable()
export class MoviesQuery extends Query<MoviesState> {

	constructor(protected store: MovieStore, private routerQuery: ApplicationRouterQuery) {
		super(store);
	}

	moviesByCategoryId$ = this.getMoviesByCategoryId();
	count$ = this.select(s => s.movies.length);

	private getMoviesByCategoryId(): Observable<Movie[]> {
		return this.routerQuery.categoryIdParam$.pipe(
			switchMap()
		)
	}
}
