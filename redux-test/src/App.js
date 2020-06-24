import React from 'react';
import logo from './logo.svg';
import NavBar from './Views/Nav'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/Home'
import Login from './Views/Login'


function App() {
  return (
   
  <Router>
    <NavBar />
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
  
      </Switch>
      </div>

  </Router>
  
   
  );
}

export default App;
