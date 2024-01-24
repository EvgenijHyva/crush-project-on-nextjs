import styles from "./meals-grid.module.css";
import MealItem from './meal-item';

export interface MealItemProps {
	id: number;
	title: string;
	slug: string;
	image: string;
	summary: string;
	creator: string;
}

interface MealsGridProps {
	meals: MealItemProps[];
}

export default function MealsGrid({ meals }: MealsGridProps) {
	return <ul className={styles.meals}>
		{meals.map(meal => <li key={meal.id}>
			<MealItem {...meal} />
		</li>)}
	</ul>
}