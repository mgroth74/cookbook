import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Create from "./components/Create";
import Delete from "./components/Delete";
import { Link, Route } from "react-router-dom";

function App() {
  let [data, setData] = useState();
  let [showCreate, setShowCreate] = useState(false);
  let [showDelete, setShowDelete] = useState(false);
  let [showUdate, setShowUpdate] = useState(false);

  const showCreateModal = () => {
    setShowCreate(true);
  };
  const hideCreateModal = () => {
    setShowCreate(false);
  };

  const showDeleteModal = () => {
    setShowDelete(true);
  };
  const hideDeleteModal = () => {
    setShowDelete(false);
  };

  const showUpdateModal = () => {
    setShowUpdate(true);
  };
  const hideUpdateModal = () => {
    setShowUpdate(false);
  };

  let dataUrl = "http://localhost:3000/recipes/";

  useEffect(() => {
    fetch(dataUrl)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const createRecipe = Recipe => {
    fetch("http://localhost:3000/recipes/", {
      body: JSON.stringify(Recipe),
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(createdRecipe => createdRecipe.json());
    data.push(Recipe);
  };

  const updateRecipe = Recipe => {
    fetch("http://localhost:3000/recipes/", {
      body: JSON.stringify(Recipe),
      method: "put",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(createdRecipe => createdRecipe.json());
    data.push(Recipe);
    console.log(data);
  };

  const deleteRecipe = name => {
    fetch("http://localhost:3000/"+name, {
      body: JSON.stringify(name),
      method: "delete",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }).then(deleteRecipe => deleteRecipe.json());
    //  data.push(Recipe)
    console.log(data);
  };

  return (
    <div>
      <header className="header">
        <Link to="/" className="link">
          Shahzad and Mike's Recipes
        </Link>
      </header>
      <main>
        <div className="body">
          <div>this is the list of recipes</div>
          <div>
            <Create
              showCreate={showCreate}
              handleClose={hideCreateModal}
              createRecipe={createRecipe}
            >
              <p>Modal</p>
            </Create>
            <button
              className="createbtn"
              type="button"
              onClick={showCreateModal}
            >
              Add a recipe
            </button>
          </div>
          <div>
            <Delete
              showDelete={showDelete}
              handleClose={hideDeleteModal}
              deleteRecipe={deleteRecipe}
            >
              <p>Modal</p>
            </Delete>
            <button
              className="createbtn"
              type="button"
              onClick={showDeleteModal}
            >
              Delete a recipe
            </button>
          </div>

          <div className="body">
            <Home data={data} />
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
