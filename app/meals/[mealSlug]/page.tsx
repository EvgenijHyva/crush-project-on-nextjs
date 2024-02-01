import { getMeal } from '@/lib/meals';
import styles from "./page.module.css";
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface MealsParams {
	params: {
		mealSlug: string;
	}
	searchParams: {}
}

export async function generateMetadata({ params: { mealSlug } }: MealsParams): Promise<Metadata> {
	const meal = await getMeal(mealSlug);

	if (!meal) {
		notFound();
	}

	return {
		title: meal?.title ?? "Single meal",
		description: `You can use the recipe for cooking delicious ${meal?.title ?? ""} meal. Summary ${meal?.summary}`,
		authors: [{ name: meal?.creator }],
		publisher: meal?.creator_email,
		creator: meal?.creator,
		keywords: [meal.title, meal.creator, meal.slug],
		formatDetection: {
			address: false,
			email: true,
			telephone: false,
			url: false,
			date: false
		}
	};
}

export default async function MealsWithSlugPage({ params: { mealSlug } }: MealsParams) {
	const meal = await getMeal(mealSlug);

	if (!meal) {
		notFound();
	}
	meal.instructions = meal.instructions.replace(/\n/g, '<br />');

	return (<>
		<header className={styles.header}>
			<div className={styles.image}>
				<Image src={`https://evgeny-nextjs-demo-meals-images.s3.amazonaws.com${meal.image}`} fill alt={meal.title} />
			</div>
			<div className={styles.headerText}>
				<h1> {meal.title} </h1>
				<p className={styles.creator}>
					by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
				</p>
			</div>
			<p className={styles.summary}>{meal.summary}</p>
		</header>
		<main className={styles.main}>
			<p className={styles.instructions} dangerouslySetInnerHTML={{
				__html: meal.instructions
			}}></p>
		</main>
	</>);
}