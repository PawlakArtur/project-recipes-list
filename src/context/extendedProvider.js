import React from 'react';
import ManageRecipesContext from './ManageRecipesContext';

const extendedProvider = Component => {
	class ExtendedProvider extends React.Component {
		state = {
			recipes: [],
			showModal: false,
			activeRecipeID: null
		}

		componentDidMount() {
			this.loadRecipes();
		}

		loadRecipes = () => {
			const recipes = localStorage.getItem('recipes');
			this.setState({
				recipes: JSON.parse(recipes) || []
			});
		}
		
		addRecipe = recipe => {
			const { recipes } = this.state;
			const enrichedRecipes = [ ...recipes, recipe ];
			localStorage.setItem('recipes', JSON.stringify(enrichedRecipes));
			this.loadRecipes();
			this.toggleModal();
		}
		
		removeRecipe = recipeID => {
			const { recipes } = this.state;
			const recipesWithoutRemoved = recipes.filter(recipe => recipe.id !== recipeID);
			localStorage.setItem('recipes', JSON.stringify(recipesWithoutRemoved));
			this.loadRecipes();
		}

		editRecipe = editedRecipe => {
			const { recipes } = this.state;
			const recipesAfterEdit = recipes.map(recipe => {
				if(recipe.id === editedRecipe.id) {
					return editedRecipe;
				}
				return recipe;
			});
			localStorage.setItem('recipes', JSON.stringify(recipesAfterEdit));
			this.loadRecipes();
			this.toggleModal();
		}

		toggleModal = (recipeID = null) => {
			this.setState(prevState => ({
				showModal: !prevState.showModal,
				activeRecipeID: recipeID
			}))
		}

		render() {
			return (
				<ManageRecipesContext.Provider value={({
					loadRecipes: this.loadRecipes,
					addRecipe: this.addRecipe,
					removeRecipe: this.removeRecipe,
					editRecipe: this.editRecipe,
					toggleModal: this.toggleModal,
					recipes: this.state.recipes,
					activeRecipeID: this.state.activeRecipeID,
					showModal: this.state.showModal,
				})}>
					<Component />
				</ManageRecipesContext.Provider>
			);
		}
	}
	return ExtendedProvider;
}

export default extendedProvider;
