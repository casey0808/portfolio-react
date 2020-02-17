import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Project from './Project';
import About from './About';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h2 className="header">Casey C</h2>
        <NavLink exact to="/" activeClassName="active-nav" className="nav-text">Project</NavLink>
        <NavLink exact to="/about" activeClassName="active-nav" className="nav-text">About</NavLink>        
      </nav>
      <Switch className="main">
        <Route exact path="/" render={() => <Project />} />
        <Route exact path="/About" render={() => <About />} />
      </Switch>
    </div>
  );
}

export default App;
