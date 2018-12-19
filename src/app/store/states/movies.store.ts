import { Store, StoreConfig, EntityState, EntityStore } from '@datorama/akita';
import { Movie } from '../models/movie.model';

const MoviesStoreName = 'movies';

export interface MoviesState extends EntityState {
	moviesByCategoryId: Movie[];
}

@StoreConfig({ name: MoviesStoreName })
export class MoviesStore extends Store<MoviesState> {
	constructor() {
		super({ moviesByCategoryId: [] });
	}
}
