import { Injectable } from '@angular/core';
import { Query, ID } from '@datorama/akita';
import { RouterQuery, RouterStore } from '@datorama/akita-ng-router-store';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable()
export class ApplicationRouterQuery extends RouterQuery {

	constructor(protected store: RouterStore) {
		super(store);
	}

	categoryIdParam$: Observable<ID> = this.select(s => s.state.root.params['categoryId']);
}
