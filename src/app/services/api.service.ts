import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { db } from './db';
import { Movie, Category } from '../store/models';
import { ID } from '@datorama/akita';
import { ApiError } from '../store/models/api-error.model';

@Injectable()
export class ApiService {
	private readonly delayTime = 700;

	constructor() { }

	getMovies(): Observable<Movie[]> {
		return of(db.movies).pipe(delay(this.delayTime));
	}

	getMoviesByCategoryId(categoryId: ID): Observable<Movie[]> {
		// voluntarily trigger error
		if (categoryId == 4) {
			throw { code: 400, message: '❌ Bad category ❌' } as ApiError;
		}

		return of(db.movies.reduce((datas, movie) => {
			if (movie.categoryId == categoryId) {
				datas.push(movie);
			}
			return datas;
		}, [])).pipe(delay(this.delayTime));
	}

	getMovieById(movieId: ID): Observable<Movie> {
		const currentMovie = db.movies.find(movie => movie.id == movieId);
		if (!currentMovie) {
			throw { code: 404, message: '❌ Movie not found ❌' } as ApiError;
		}
		return of(currentMovie).pipe(delay(this.delayTime));
	}

	getCategories(): Observable<Category[]> {
		return of(db.categories).pipe(delay(this.delayTime));
	}
}
