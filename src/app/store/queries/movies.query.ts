import { Injectable } from '@angular/core';
import { Query, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { distinctUntilChanged, tap, last, take } from 'rxjs/operators';
import { MoviesState, MoviesStore } from '../states';
import { Movie } from '../models';

@Injectable()
export class MoviesQuery extends Query<MoviesState> {

	constructor(protected store: MoviesStore) {
		super(store);
	}

	moviesByCategoryId$ = this.getMoviesByCategoryId();
	moviesByCategoryIdCount$ = this.select(s => s.moviesByCategoryId.length);

	currentMovie$ = this.select(s => s.currentMovie);

	private getMoviesByCategoryId(): Observable<Movie[]> {
		return this.select(s => s.moviesByCategoryId);
	}
}
