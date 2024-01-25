import sql from "better-sqlite3";
import { MealItem, MealItemProps } from './app-types';

const db = sql("meals.db");

export async function getMeals(): Promise<MealItemProps[]> {
	await new Promise((resolve) => setTimeout(resolve, 5000));
	//throw new Error("DB Timeout")
	return (db.prepare("SELECT * FROM meals").all() as MealItemProps[])
		.map(item => new MealItem(item)); // fetch all rows
};

export async function getMeal(slug: string): Promise<MealItemProps | null> {
	const meal = db.prepare("SELECT * FROM meals where slug = ?").get(slug)
	if (meal)
		return new MealItem(meal as MealItemProps);
	else
		return null;
}