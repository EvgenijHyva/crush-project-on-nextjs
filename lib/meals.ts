import sql from "better-sqlite3";
import { MealItem, MealItemProps } from './app-types';

const db = sql("meals.db");

export async function getMeals(): Promise<MealItemProps[]> {
	await new Promise((resolve) => setTimeout(resolve, 5000));
	return (db.prepare("SELECT * FROM meals").all() as MealItemProps[])
		.map(item => new MealItem(item)); // fetch all rows
};