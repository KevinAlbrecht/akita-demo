import { Injectable } from '@angular/core';
import { MoviesStore } from '../store/states';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
import { Movie } from '../store/models/movie.model';
import { ApplicationRouterQuery } from '../store/queries/application-router.query';
import { switchMap, tap, map } from 'rxjs/operators';
import { ID } from '@datorama/akita';

@Injectable()
export class MovieService {

	constructor(private moviesStore: MoviesStore, private apiService: ApiService, private appRouteQuery: ApplicationRouterQuery) { }

	getMoviesByCategoryId(): Observable<void> {
		this.moviesStore.setLoading(true);
		return this.appRouteQuery.categoryIdParam$.pipe(
			switchMap(categoryIdParam => this.apiService.getMoviesByCategoryId),
			tap(movies => this.moviesStore.update(state => ({ ...state, movies }))),
			map(r => null));
	}
}