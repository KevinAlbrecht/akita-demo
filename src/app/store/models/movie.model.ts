import { ID } from '@datorama/akita';
import { Person } from './person.model';

export type Movie = {
	id: ID;
	categoryId: number;
	title: string;
	language: string;
	RecordedYear: number;
	length: number;
	picto: string;
	specialMention: Person;
};

export const createMovie = ({
	id = null,
	categoryId = null,
	title = '',
	language = '',
	RecordedYear = null,
	length = null,
	picto = '',
	specialMention = null,
}: Partial<Movie>) => {
	return { id, categoryId, title, language, RecordedYear, length, picto, specialMention };
};



