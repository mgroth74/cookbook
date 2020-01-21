import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import { Link, Route } from "react-router-dom";

function App() {

  let [data, setData] = useState();

    const dataUrl = "http://localhost:3000/recipes/";
    useEffect(() => {
      fetch(dataUrl)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(err => {
        console.log(err);
      });
   }, [])
    
  return (
    <div>
      <header className="header">
        <Link to = "/" className="link">
          Shahzad and Mike's Recipes
          </Link>
      </header>
      <main>
        <div className="body">
        <Home data={data}/>
        <Route exact path = "/" component={Home}/>
              
        </div>
        
      </main>
    </div>
  );
}

export default App;
