import Ingredient from "./Ingredient"


const IngredientList = (props) => {
	return (
		<ul>
			{props.ingredients.map((ingredient, index) =>
				<Ingredient key={index} ingredient={ingredient} isList={true} />
			)}
		</ul>
	)
}

export default IngredientList