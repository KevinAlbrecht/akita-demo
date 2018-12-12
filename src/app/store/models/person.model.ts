import { ID } from '@datorama/akita';

export type Person = {
	firstName: string;
	lastName: string;
};

export const createPerson = ({
	firstName = '',
	lastName = ''
}: Partial<Person>) => {
	return { firstName, lastName };
};



