export interface MealItemProps {
	id: number;
	title: string;
	slug: string;
	image: string;
	summary: string;
	creator: string;
}


export class MealItem implements MealItemProps {
	id: number;
	title: string;
	slug: string;
	image: string;
	summary: string;
	creator: string;

	constructor(item: MealItemProps) {
		this.id = item.id;
		this.title = item.title;
		this.slug = item.slug;
		this.image = item.image;
		this.summary = item.summary;
		this.creator = item.creator;
	}
}