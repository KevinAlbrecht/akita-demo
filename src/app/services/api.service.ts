import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { db } from './db';
import { Movie, Category } from '../store/models';
import { ID } from '@datorama/akita';

@Injectable()
export class ApiService {
	private readonly delayTime = 1000;

	constructor() { }

	getMovies(): Observable<Movie[]> {
		return of(db.movies).pipe(delay(this.delayTime));
	}

	getMoviesByCategoryId(categoryId: ID): Observable<Movie[]> {
		if (categoryId == 4) {
			throw new Error('Bad Category');
		}

		return of(db.movies.reduce((datas, movie) => {
			if (movie.categoryId == categoryId) {
				datas.push(movie);
			}
			return datas;
		}, [])).pipe(delay(this.delayTime));
	}

	getCategories(): Observable<Category[]> {
		return of(db.categories).pipe(delay(this.delayTime));
	}
}
