import sql from "better-sqlite3";
import { MealItem, MealItemProps } from './app-types';

const db = sql("meals.db");

export async function getMeals(): Promise<MealItemProps[]> {
	return (db.prepare("SELECT * FROM meals").all() as MealItemProps[])
		.map(item => new MealItem(item)); // fetch all rows
};