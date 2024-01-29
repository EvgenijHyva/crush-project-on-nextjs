import sql from "better-sqlite3";
import slugify from 'slugify';
import xss from 'xss';
import { IMeal, MealItem, MealItemProps } from './app-types';
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals(): Promise<MealItemProps[]> {
	await new Promise((resolve) => setTimeout(resolve, 5000));
	//throw new Error("DB Timeout")
	return (db.prepare("SELECT * FROM meals").all() as MealItemProps[])
		.map(item => new MealItem(item)); // fetch all rows
};

export async function getMeal(slug: string): Promise<MealItemProps | null> {
	const meal = db.prepare("SELECT * FROM meals where slug = ?").get(slug)
	return meal ? new MealItem(meal as MealItemProps) : null;
}

export async function saveMeal(meal: IMeal) {
	const slug = slugify(meal.title, { lower: true, trim: true });
	meal.instructions = xss(meal.instructions); // protection from cross site scripting attacks
	// storing images in public/images for testing now
	const extension = meal.image.name.split(".").pop();
	const fileName = `${slug}.${extension}`;

	const relFilePath = `images/${fileName}`;

	const stream = fs.createWriteStream(`public/${relFilePath}`);
	const bufferedImage = await meal.image.arrayBuffer();
	stream.write(Buffer.from(bufferedImage), (err) => {
		if (err) {
			throw new Error(`Saving image (${meal.image.name} -> ${fileName}) is failed.`)
		}
	});
	const imagePath = `/${relFilePath}`
	const dbMeal = { ...meal, slug, image: imagePath };
	console.log(dbMeal);

	db.prepare(`
		INSERT INTO meals 
			(title, summary, instructions, slug, image, creator, creator_email)
		VALUES (@title, @summary, @instructions, @slug, @image, @creator, @creator_email)
	`).run(dbMeal);
}