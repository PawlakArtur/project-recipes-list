import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ManageRecipesContext from '../context/ManageRecipesContext';
import uuid from 'uuidv4';

const modalRoot = document.getElementById('modal-root');

const INITIAL_STATE = {
	recipeName: '',
	ingredients: ''
};

class ManageRecipeModal extends Component {
	static contextType = ManageRecipesContext;
	state = INITIAL_STATE;
	el = document.createElement('div');
	
	componentDidMount() {
		modalRoot.appendChild(this.el);
		const { activeRecipeID } = this.context;
		if(activeRecipeID) {
			const recipe = this.context.recipes.find(recipe => recipe.id === activeRecipeID);
			this.setState({
				recipeName: recipe.recipeName,
				ingredients: recipe.ingredients
			});
		}
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.el);
	}

	saveToState = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	addRecipe = () => {
		const newRecipe = {
			...this.state,
			id: uuid()
		};
		this.context.addRecipe(newRecipe);
	}

	editRecipe = () => {
		const { activeRecipeID } = this.context;
		const editedRecipe = {
			...this.state,
			id: activeRecipeID
		}
		this.context.editRecipe(editedRecipe);
	}

	closeModal = () => {
		this.context.toggleModal();
	}

    render() {
		const modalType = this.context.activeRecipeID ? 'edit' : 'add';
		const modalTitles = {
			add: 'Add a Recipe',
			edit: 'Edit Recipe',
		}
		const modalSubmitMethod = {
			add: this.addRecipe,
			edit: this.editRecipe
		}
        return ReactDOM.createPortal(
			<div>
				<h2>
					{modalTitles[modalType]}
				</h2>
				<form onSubmit={modalSubmitMethod[modalType]}>
					<label htmlFor="recipeName">
						Recipe
						<input
							type="text"
							name="recipeName"
							placeholder="Recipe Name"
							value={this.state.recipeName}
							onChange={this.saveToState}/>
					</label>
					<label htmlFor="ingredients">
						Ingredients
						<input
							type="textarea"
							name="ingredients"
							placeholder="Enter Ingredients, Separated by Commas"
							value={this.state.ingredients}
							onChange={this.saveToState}/>
					</label>
					<button onClick={modalSubmitMethod[modalType]}>{modalType}</button>
					<button onClick={this.closeModal}>Close</button>
				</form>
			</div>,
			this.el
        );
    }
}
 
export default ManageRecipeModal;
