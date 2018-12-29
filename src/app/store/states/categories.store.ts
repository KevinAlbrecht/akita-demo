import { Store, StoreConfig, EntityState } from '@datorama/akita';
import { Category } from '../models/category.model';

const CategoriesStoreName = 'categories';

@StoreConfig({ name: CategoriesStoreName })
export class CategoriesStore extends Store<EntityState<Category>> {
	constructor() {
		super({});
	}
}
