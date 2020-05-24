import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Fun from './Fun';
import Projects from './Projects';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <div className="nav">
      <nav className="navbar">
          {/* <li>
            <NavLink className = "nav-link" exact activeClassName="active" to="/">elise xu</NavLink>
          </li> */}
          <li>
            <NavLink className = "nav-link" exact activeClassName="active" to="/">home</NavLink>
          </li>
          <li>
            <NavLink className = "nav-link" activeClassName="active" to="/about">about</NavLink>
          </li>
          <li>
            <NavLink className = "nav-link" activeClassName="active" to="/projects">projects</NavLink>
          </li>
          <li>
            <NavLink className = "nav-link" activeClassName="active" to="/fun">fun</NavLink>
          </li>
      </nav>
      </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/fun">
            <Fun />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
