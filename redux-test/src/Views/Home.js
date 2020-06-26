import React, { useEffect } from "react";
import logo from "../logo.svg";
import "../App.css";
import animalHandler from "../AnimalHandler/AnimalHandler";
import { connect } from "react-redux";
import {fetchAnimals} from '../AnimalReducers/AnimalDataReducer'

let Home = (props) => {

  useEffect(() => {

    animalHandler.getAllAnimals();
  
  }, []);

  // Empty --> update on initial render only
  // no array --> updates o neverything



  console.log(props);
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
};
function mapStateToProps(state) {
  return {
    animals: state.animal.animals,
  };
}

export { Home };
export default connect(mapStateToProps, {fetchAnimals})(Home);
