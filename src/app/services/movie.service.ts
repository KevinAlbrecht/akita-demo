import { Injectable } from '@angular/core';
import { MoviesStore } from '../store/states';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
import { ApplicationRouterQuery } from '../store/queries';
import { switchMap, tap, catchError, map, finalize } from 'rxjs/operators';

@Injectable()
export class MovieService {
	constructor(private moviesStore: MoviesStore,
		private apiService: ApiService,
		private appRouteQuery: ApplicationRouterQuery) { }

	setMoviesByCategoryId(): Observable<void> {
		this.moviesStore.reset();
		this.moviesStore.setLoading(true);

		return this.appRouteQuery.categoryIdParam$.pipe(
			switchMap(catId => this.apiService.getMoviesByCategoryId(catId)),
			tap(moviesByCategoryId => this.moviesStore.setState(state => ({ ...state, moviesByCategoryId }))),
			catchError(err => of(null).pipe(tap(() => this.moviesStore.setError(err)))),

			finalize(() => this.moviesStore.setLoading(false)),
			map(a => null)
		);
	}
}
