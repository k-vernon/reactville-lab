import Ingredient from "./Ingredient"


const IngredientList = (props) => {
	console.log("Ingredient List", props)
	return (
		<ul>
			{props.ingredients.map((ingredient, index) =>
				<Ingredient key={index} ingredient={ingredient} isList={true} addToBurger={props.addToBurger} />
			)}
		</ul>
	)
}

export default IngredientList