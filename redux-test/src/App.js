import React from "react";
import logo from "./logo.svg";
import NavBar from "./Views/Nav";
import Footer from "./Views/Footer";
import store from "./Store";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <Router>
      <Grid
        container
        justify="center"
        alignItems="stretch"
        style={{ backgroundColor: "#61dafb" }}
      >
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={Login} />
        </Switch>
      </Grid>
      <Footer />
    </Router>
  );
}

export default App;
