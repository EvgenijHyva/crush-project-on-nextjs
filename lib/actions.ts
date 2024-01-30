"use server";

import { redirect } from 'next/navigation';
import { IMeal } from './app-types';
import { saveMeal } from './meals';
import { isInvalidEmail, isInvalidImage, isInvalidText } from './server-validation';

export async function shareMeal(prevState: { message: string }, formData: FormData): Promise<{ message: string }> {
	"use server";
	const meal: IMeal = {
		title: formData.get("title") as string,
		summary: formData.get("summary") as string,
		instructions: formData.get("instructions") as string,
		image: formData.get("image") as File,
		creator_email: formData.get("email") as string,
		creator: formData.get("name") as string,
	};

	if (
		isInvalidText(meal.title) || isInvalidText(meal.summary) || isInvalidText(meal.instructions) ||
		isInvalidImage(meal.image) || isInvalidEmail(meal.creator_email) || isInvalidText(meal.creator)
	) {
		return {
			message: "invalid input."
		};
	}

	await saveMeal(meal);
	redirect("/meals");

	return { message: "success" }
}
