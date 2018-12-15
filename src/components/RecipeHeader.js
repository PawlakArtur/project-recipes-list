import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RecipeHeader extends Component {
    openDetailsHandler = () => {
        this.props.toggleDetails();
    }
    render() {
        return (
            <p
                onClick={this.openDetailsHandler}
                className="recipe__header">
                {this.props.recipeName}
            </p>
        );
    }
}

RecipeHeader.propTypes = {
    recipeName: PropTypes.string.isRequired
}
 
export default RecipeHeader;