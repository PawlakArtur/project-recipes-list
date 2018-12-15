import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleRecipe from './SingleRecipe';
import ManageRecipesContext from '../context/ManageRecipesContext';

class RecipesList extends Component {
	static contextType = ManageRecipesContext;

    render() {
        const { recipes } = this.context;
        return (
            <ul>
                {recipes.map(recipe => (
                    <SingleRecipe key={recipe.id} recipe={recipe}/>
                ))}
            </ul>
        );
    }
}

export default RecipesList;
