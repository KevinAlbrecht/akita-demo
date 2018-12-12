import { ID } from '@datorama/akita';

export type Category = {
	id: ID;
	title: string;
	emoji: string;
	emojiStyle: string;
};

export const createCategory = ({
	id = null,
	title = '',
	emoji = '',
	emojiStyle = ''
}: Partial<Category>) => {
	return { id, title, emoji, emojiStyle };
};
