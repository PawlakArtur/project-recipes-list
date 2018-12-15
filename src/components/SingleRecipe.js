import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeHeader from './RecipeHeader';
import RecipeIngredients from './RecipeIngredients';
import ManageButtons from './ManageButtons';

class SingleRecipe extends Component {
    state = {
        showDetails: false
    }

    toggleDetails = () => {
        this.setState(prevState => ({
            showDetails: !prevState.showDetails
        }));
    }

    render() {
        const { recipe } = this.props;
        const { showDetails } = this.state;
        return (
            <li>
                <RecipeHeader
                    recipeName={recipe.recipeName}
                    toggleDetails={this.toggleDetails}/>
                { showDetails
                    && <div className="recipe__details">
                        <RecipeIngredients ingredients={recipe.ingredients}/>
                        <ManageButtons recipeID={recipe.id} />
                    </div>
                }
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