import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RecipeIngredients extends Component {
    render() {
        const splittedIngredients = this.props.ingredients.split(',');
        return (
            <>
                <p className="recipe__ingredientsTitle">Ingredients</p>
                <ul className="recipe__ingredients">
                    {splittedIngredients.map(ingredient => (
                        <li className="recipe__ingredient" key={ingredient}>
                            {ingredient}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

RecipeIngredients.propTypes = {
    ingredients: PropTypes.string.isRequired
}
 
export default RecipeIngredients;