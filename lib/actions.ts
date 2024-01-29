"use server";

import { redirect } from 'next/navigation';
import { IMeal } from './app-types';
import { saveMeal } from './meals';

export async function shareMeal(formData: FormData) {
	"use server";
	const meal: IMeal = {
		title: formData.get("title") as string,
		summary: formData.get("summary") as string,
		instructions: formData.get("instructions") as string,
		image: formData.get("image") as File,
		creator_email: formData.get("email") as string,
		creator: formData.get("name") as string,
	};

	await saveMeal(meal);
	redirect("/meals");
}
