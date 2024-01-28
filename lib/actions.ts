"use server";

import { MealItemProps } from './app-types';

interface IMeal extends Omit<MealItemProps, "id" | "slug"> {
	image: any;
}

export async function shareMeal(formData: FormData) {
	"use server";
	const meal: IMeal = {
		title: formData.get("title") as string,
		summary: formData.get("summary") as string,
		instructions: formData.get("instructions") as string,
		image: formData.get("image") as string,
		creator_email: formData.get("email") as string,
		creator: formData.get("name") as string,
	};

	console.log(meal)
}
