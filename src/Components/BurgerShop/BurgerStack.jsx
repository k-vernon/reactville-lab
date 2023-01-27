
import Ingredient from './Ingredient'


const BurgerStack = (props) => {
  return (
    <ul className="burger-stack">
      {props.stack.length ?
        props.stack.map((ingredient, index) =>
          <Ingredient key={index} ingredient={ingredient} />
        )
        :
        <p>This burger doesn't have ingredients yet!</p>
      }
    </ul>
  )
}

export default BurgerStack