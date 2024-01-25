import styles from "./meals-grid.module.css";
import MealItem from './meal-item';
import { MealItemProps } from '@/lib/app-types';

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