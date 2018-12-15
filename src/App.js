import React, { Component } from "react";
import RecipesList from "./components/RecipesList";
import extendedProvider from "./context/extendedProvider";
import ManageRecipesContext from './context/ManageRecipesContext';
import ManageRecipeModal from './components/ManageRecipeModal';

class App extends Component {
  static contextType = ManageRecipesContext;

  openAddRecipeModal = () => {
    this.context.toggleModal();
  }

  render() {
    const modal = this.context.showModal
      ? <ManageRecipeModal />
      : null;
    return (
      <div>
        <RecipesList />
        <button onClick={this.openAddRecipeModal}>Add Recipe</button>
        {modal}
      </div>
    );
  }
}

export default extendedProvider(App);
