export default function MealsWithSlugPage(props: any) {
	console.log(props)
	return (<div>this is slug page on meals: {props.params.mealSlug} </div>)
}