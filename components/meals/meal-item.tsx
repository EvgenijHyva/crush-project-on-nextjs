import styles from "./meal-item.module.css";

import Link from 'next/link';
import Image from 'next/image';

import { MealItemProps } from '@/lib/app-types';

export default function MealItem({ title, slug, image, summary, creator }: MealItemProps) {
	return (
		<article className={styles.meal}>
			<header>
				<div className={styles.image}>
					<Image src={`https://evgeny-nextjs-demo-meals-images.s3.amazonaws.com${image}`} alt={title} fill />
				</div>
				<div className={styles.headerText}>
					<h2>{title}</h2>
					<p>by {creator}</p>
				</div>
			</header>
			<div className={styles.content}>
				<p className={styles.summary}>{summary}</p>
				<div className={styles.actions}>
					<Link href={`/meals/${slug}`}>View Details</Link>
				</div>
			</div>
		</article>
	);
}