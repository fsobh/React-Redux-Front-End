import React, { useEffect } from "react";
import logo from "../logo.svg";
import "../App.css";
import animalHandler from "../AnimalHandler/AnimalHandler";

function Home({ props }) {
  useEffect(() => {
    animalHandler.getAllAnimals();
  }, [props.animal.animals]);

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default Home;
