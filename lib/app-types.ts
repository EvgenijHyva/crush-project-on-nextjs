export interface MealItemProps {
	id: number;
	title: string;
	slug: string;
	image: string;
	summary: string;
	creator: string;
	creator_email: string;
	instructions: string;
}


export class MealItem implements MealItemProps {
	id: number;
	title: string;
	slug: string;
	image: string;
	summary: string;
	creator: string;
	creator_email: string;
	instructions: string;

	constructor(item: MealItemProps) {
		this.id = item.id;
		this.title = item.title;
		this.slug = item.slug;
		this.image = item.image;
		this.summary = item.summary;
		this.creator = item.creator;
		this.creator_email = item.creator_email;
		this.instructions = item.instructions;
	}
}