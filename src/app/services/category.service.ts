import { Injectable } from '@angular/core';
import { CategoriesStore } from '../store/states/categories.store';
import { ID } from '@datorama/akita';
import { ApiService } from './api.service';
import { Category } from '../models';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {

	constructor(private categoriesStore: CategoriesStore, private apiService: ApiService) { }

	getCategories(): Observable<Category[]> {
		this.categoriesStore.setLoading(true);
		return this.apiService.getCategories()
			.pipe(
				tap(
					(categories: Category[]) =>
						this.categoriesStore.update(results => ({ ...results, categories })),
					err => this.categoriesStore.setError(err),
					() => this.categoriesStore.setLoading(false)));
	}
}
