import { Store, StoreConfig } from '@datorama/akita';
import { CategoriesStoreName } from './index';
import { Category } from '../models/category.model';

export interface CategoriesState {
	categories: Category[];
}

function createInitialState(): CategoriesState {
	return { categories: [] };
}

@StoreConfig({ name: CategoriesStoreName })
export class CategoriesStore extends Store<CategoriesState> {
	constructor() {
		super(createInitialState);
	}
}
