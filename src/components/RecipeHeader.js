import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RecipeHeader extends Component {
    render() {
        return (
            <p>{this.props.recipeName}</p>
        );
    }
}

RecipeHeader.propTypes = {
    recipeName: PropTypes.string.isRequired
}
 
export default RecipeHeader;