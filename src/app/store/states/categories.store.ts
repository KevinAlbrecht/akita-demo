import { Store, StoreConfig } from '@datorama/akita';
import { Category } from '../models/category.model';

const CategoriesStoreName = 'categories';

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
