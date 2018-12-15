import React from 'react';

const ManageRecipesContext = React.createContext({ loadRecipes: () => {}, addRecipe: () => {}, removeRecipe: () => {}, editRecipe: () => {}, toggleModal: () => {}, showModal: false, recipes: [], activeRecipeID: null });

export default ManageRecipesContext;
