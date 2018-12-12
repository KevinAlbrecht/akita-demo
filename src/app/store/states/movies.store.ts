import { Store, StoreConfig } from '@datorama/akita';
import { CategoriesStoreName } from './index';
import { Movie } from '../models/movie.model';

export interface MoviesState {
	movies: Movie[];
}

function createInitialState(): MoviesState {
	return { movies: [] };
}

@StoreConfig({ name: CategoriesStoreName })
export class MoviesStore extends Store<MoviesState> {
	constructor() {
		super(createInitialState);
	}
}
