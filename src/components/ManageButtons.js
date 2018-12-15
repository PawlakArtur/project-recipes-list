import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ManageRecipesContext from '../context/ManageRecipesContext';
import Button from '../styles/Button.css';

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
					className="btn danger"
					onClick={this.removeRecipe}>
					Delete
				</button>
				<button
					className="btn default"
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
