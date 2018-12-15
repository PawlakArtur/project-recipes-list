import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ManageRecipesContext from '../context/ManageRecipesContext';

class ManageButtons extends Component {
	static contextType = ManageRecipesContext;

	removeRecipe = () => {
		this.context.removeRecipe(this.props.recipeID)
	}

	openModal = () => {
		this.context.toggleModal(this.props.recipeID);
	}

    render() {
        return (
			<div>
				<button
					onClick={this.removeRecipe}>
					Delete
				</button>
				<button
					onClick={this.openModal}>
					Edit
				</button>
			</div>
        );
    }
}

ManageButtons.propTypes = {
	recipeID: PropTypes.string
}

export default ManageButtons;
