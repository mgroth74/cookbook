import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeList from './components/recipeList'

function App() {
  return (
    <div>
      <header className="header">
          Shahzad and Mike's Recipes
      </header>
      <main>
        <div className="recipelist">
          <RecipeList/>
        </div>
      </main>
    </div>
  );
}

export default App;
