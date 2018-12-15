import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeHeader from './RecipeHeader';
import RecipeIngredients from './RecipeIngredients';
import ManageButtons from './ManageButtons';

class SingleRecipe extends Component {
    render() {
        const { recipe } = this.props;
        return (
            <li>
                <RecipeHeader recipeName={recipe.recipeName}/>
                <RecipeIngredients ingredients={recipe.ingredients}/>
                <ManageButtons recipeID={recipe.id} />
            </li>
        );
    }
}

SingleRecipe.propTypes = {
    recipe: PropTypes.shape({
        recipeName: PropTypes.string.isRequired,
        ingredients: PropTypes.string,
        id: PropTypes.string
    }).isRequired,
}
 
export default SingleRecipe;