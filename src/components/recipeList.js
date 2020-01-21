import React, { useState } from "react";
import Recipes from './recipes'

function RecipeList() {
let [data, setData] = useState();

const handleClick= () => {
const dataUrl = "http://localhost:3000/recipes/"
  fetch(dataUrl)
  .then(res => res.json())
  .then(data => {
    setData(data);
  })
  .catch(err => {
    console.log(err);
  });
  console.log(data)
}

  let recipedata = {data}
  let recipe = recipedata.map((item, _id) => {
    return(
      <div className="recipe" key={item._id}>
      <Recipes data={data}/>
      </div>
    )
  })
  console.log('recipedata', recipedata)

  return (
    <div>
      <div>this is the list of recipes</div>

      <button onClick={handleClick}>All Recipes</button>
      {recipe}
    </div>
  );
}

export default RecipeList;
