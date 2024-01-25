"use client"
import styles from "./not-found.module.css";
import humanizeString from 'humanize-string';
import { useParams } from 'next/navigation';

export default function NotFoundMeal() {
	const { mealSlug } = useParams();
	return <main className='not-found'>
		<h1>Not found</h1>
		<p> Unfortunately, but we couldn&apos;t find the requested meal</p>
		<p> You tried to find:&nbsp;
			<b className={styles["human-slug"]}>{humanizeString(mealSlug as string)}</b>
		</p>
	</main>
}