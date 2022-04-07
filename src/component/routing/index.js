import React from "react";
import "./routing.css";
import Search from "../../pages/search";
import Trending from "../../pages/trending";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/trending">Trending</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <br></br>

        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/trending">
            <Trending />
          </Route>
          <Route path="/">
            <h1>This is our Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export { Routing };
