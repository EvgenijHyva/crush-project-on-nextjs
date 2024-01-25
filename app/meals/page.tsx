import { Suspense } from 'react';
import Link from 'next/link';
import styles from "./page.module.css";
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import LoadingConditionally from './loading-out';

async function Meals() {
	const meals = await getMeals();
	return (
		<MealsGrid meals={meals} />
	);
}

const LoadingContent = () => {
	return (
		<LoadingConditionally>
			<span>Just a sec, loading meals ;)</span>
		</LoadingConditionally>
	);
}

export default function MealsPage() {
	return (<>
		<header className={styles.header}>
			<h1>Delicious meals, created <span className={styles.highlight}>By you</span></h1>
			<p>Choose your favorite recipe and cook it yourself.</p>
			<p className={styles.cta}>
				<Link href="/meals/share">
					Share your recepies
				</Link>
			</p>
		</header>
		<main className={styles.main}>
			<Suspense fallback={<LoadingContent />}>
				<Meals />
			</Suspense>
		</main>
	</>);
}