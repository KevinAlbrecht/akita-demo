import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CategoriesStore, CategoriesState } from '../states/categories.store';

@Injectable()
export class CategoriesQuery extends Query<CategoriesState> {

	constructor(protected store: CategoriesStore) {
		super(store);
	}

	categories$ = this.select(cs => cs.categories);
	count$ = this.select(cs => cs.categories.length);
}
