import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RecipeIngredients extends Component {
    render() {
        const splittedIngredients = this.props.ingredients.split(',');
        return (
            <ul>
                {splittedIngredients.map(ingredient => (
                    <li key={ingredient}>
                        {ingredient}
                    </li>
                ))}
            </ul>
        );
    }
}

RecipeIngredients.propTypes = {
    ingredients: PropTypes.string.isRequired
}
 
export default RecipeIngredients;