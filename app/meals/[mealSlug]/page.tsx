import { getMeal } from '@/lib/meals';
import styles from "./page.module.css";
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface MealsParams {
	params: {
		mealSlug: string;
	}
	searchParams: {}
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
				<Image src={meal.image} fill alt={meal.title} />
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