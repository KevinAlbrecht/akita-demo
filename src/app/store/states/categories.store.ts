import { Store, StoreConfig } from '@datorama/akita';
import { Category } from '../../models';
import { CategoriesStoreName } from './index';

export interface CategoriesState {
	categories: Category[];
}

export function createInitialState(): CategoriesState {
	return { categories: [] };
}

@StoreConfig({ name: CategoriesStoreName })
export class CategoriesStore extends Store<CategoriesState> {
	constructor() {
		super(createInitialState);
	}
}
