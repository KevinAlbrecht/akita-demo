import { Injectable } from '@angular/core';
import { Query, EntityState } from '@datorama/akita';
import { CategoriesStore } from '../states';
import { Category } from '../models';

@Injectable()
export class CategoriesQuery extends Query<EntityState<Category>> {

	constructor(protected store: CategoriesStore) {
		super(store);
	}

	categories$ = this.select(cs => cs.categories);
	count$ = this.select(cs => cs.categories.length);
}
