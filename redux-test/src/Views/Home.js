import React, { useEffect } from "react";
import logo from "../logo.svg";
import "../App.css";
import animalHandler from "../AnimalHandler/AnimalHandler";
import { connect } from "react-redux";

let Home = (props) => {
  useEffect(() => {
    animalHandler.getAllAnimals();
  }, []);

  console.log(props);
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
};
function mapStateToProps(state) {
  return {
    animals: state.animals,
  };
}

export { Home };
export default connect(mapStateToProps)(Home);
