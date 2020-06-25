import React from 'react';
import logo from './logo.svg';
import NavBar from './Views/Nav'
import Footer from './Views/Footer'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/Home'
import Login from './Views/Login'


function App() {
  return (
   
  <Router >
    <NavBar />
    <div className="App" style = {{height:"auto"}}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
  
      </Switch>
      </div>
    <Footer/>
  </Router>
  
   
  );
}

export default App;
