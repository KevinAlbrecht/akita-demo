import { Injectable } from '@angular/core';
import { MoviesStore } from '../store/states';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
import { ApplicationRouterQuery } from '../store/queries';
import { switchMap, tap, catchError, map } from 'rxjs/operators';
import { Movie } from '../store/models';

@Injectable()
export class MovieService {
	constructor(private moviesStore: MoviesStore, private apiService: ApiService, private appRouteQuery: ApplicationRouterQuery) { }

	setMoviesByCategoryId(): Observable<void> {
		this.moviesStore.setLoading(true);
		return this.appRouteQuery.categoryIdParam$.pipe(
			switchMap(this.apiService.getMoviesByCategoryId),
			tap(moviesByCategoryId => this.moviesStore.update(state => ({ ...state, moviesByCategoryId })),
				err => this.moviesStore.setError<Error>(err)),
			catchError(err => of(this.moviesStore.setError<Error>(err))),
			map(() => null));
	}
}
