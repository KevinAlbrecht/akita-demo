import { Injectable } from '@angular/core';
import { CategoriesStore } from '../store/states';
import { ApiService } from './api.service';
import { tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Category } from '../store/models';

@Injectable()
export class CategoryService {

	constructor(private categoriesStore: CategoriesStore, private apiService: ApiService) { }

	setCategories(): Observable<Category[]> {
		this.categoriesStore.setLoading(true);
		return this.apiService.getCategories()
			.pipe(
				take(1),
				tap((categories: Category[]) => this.categoriesStore.setState(results => ({ ...results, categories })),
					err => this.categoriesStore.setError(err),
					() => this.categoriesStore.setLoading(false)));
	}
}
