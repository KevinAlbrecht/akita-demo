import { Store, StoreConfig } from '@datorama/akita';
import { Movie } from '../models/movie.model';

const MoviesStoreName = 'movies';

export interface MoviesState {
	moviesByCategoryId: Movie[];
}

function createInitialState(): MoviesState {
	return { moviesByCategoryId: [] };
}

@StoreConfig({ name: MoviesStoreName })
export class MoviesStore extends Store<MoviesState> {
	constructor() {
		super(createInitialState);
	}
}
