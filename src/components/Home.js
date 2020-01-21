import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

function Home(props) {
  if (props.data) {
    console.log(props);

    let recipeList = props.data.map((item, _id) => {
      return (
        <div className="recipe" key={item._id}>
          <div>name: {item.name}</div>
          <div>course: {item.course}</div>
          <div>type: {item.type}</div>
          <div>calories: {item.calories}</div>
        </div>
      );
    });

    return (
      <div>
        <div className="body">this is the list of recipes</div>
        <div className="recipelist">{recipeList}</div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Home;
